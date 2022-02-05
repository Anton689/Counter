import React, {useEffect, useState} from 'react';
import s from './Style.module.css';
import {Scoreboard} from './Scoreboard';
import {SuperButton} from './SuperButton';
import Icon from '@material-ui/core/Icon';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

type CounterPropsType = {
    minNumberValue: number
    maxNumberValue: number
    counter: number
    increaseButton: () => void
    resetButton: () => void

}
export const Counter = ({minNumberValue, maxNumberValue, counter, increaseButton, resetButton}: CounterPropsType) => {

        let [error, setError] = useState(false)
        let [isDisableInc, setIsDisableInc] = useState(true)
        let [isDisableReset, setIsDisableReset] = useState(true)

        let isEqual = minNumberValue === maxNumberValue
        let isMaxLessMin = maxNumberValue < minNumberValue
        let isMinLessZero = minNumberValue < 0
        let isMaxLessZero = maxNumberValue < 0


        useEffect(() => {
                //
                //
                //     const data =JSON.parse(localStorage.getItem("test") || "0")
                //
                //     setData(data )

                if (isEqual || isMaxLessMin || isMinLessZero || isMaxLessZero) {
                    setError(true)
                    setIsDisableInc(true)
                    setIsDisableReset(true)
                } else {
                    setError(false)
                    setIsDisableInc(false)
                    setIsDisableReset(false)
                }
            }, [minNumberValue, maxNumberValue, error]
        )

        useEffect(() => {
            if (counter === maxNumberValue) {
                setIsDisableInc(true)
            } else {
                setIsDisableInc(false)
            }

        }, [counter])

        useEffect(() => {
            if (counter === minNumberValue) {
                setIsDisableReset(true)
            } else {
                setIsDisableReset(false)
            }

        }, [counter])


        return (
            <>
                    <div className={s.scoreboard}>
                        {!error ?
                            <Scoreboard maxNumberValue={maxNumberValue} counter={counter} styles={counter === maxNumberValue ? s.scoreboardMax : ''}/> :
                            <ErrorOutlineIcon color="secondary"
                                              fontSize="large"
                            >add_circle</ErrorOutlineIcon>}

                    </div>
                    <div className={s.buttonInc}>
                        <SuperButton
                            name={'Inc'}
                            onClick={increaseButton}
                            disabled={isDisableInc}
                        />
                    </div>
                    <div className={s.buttonReset}>
                        <SuperButton
                            name={'Reset'}
                            onClick={resetButton}
                            disabled={isDisableReset}
                        />
                    </div>
            </>
        );
    }
;
