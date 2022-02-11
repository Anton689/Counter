import React, {useEffect, useState} from 'react';
import s from './Style.module.css';
import {Scoreboard} from './Scoreboard';
import {SuperButton} from './SuperButton';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

type CounterPropsType = {
    minValue: number
    maxValue: number
    counter1: number
    increaseButton: () => void
    resetButton: () => void

}
export const Counter = (props: CounterPropsType) => {

        const {
            minValue,
            maxValue,
            counter1,
            increaseButton,
            resetButton,

        } = props

        let [error, setError] = useState(false)
        let [isDisableInc, setIsDisableInc] = useState(true)
        let [isDisableReset, setIsDisableReset] = useState(true)

        let isEqual = minValue === maxValue
        let isMaxLessMin = maxValue < minValue
        let isMinLessZero = minValue < 0
        let isMaxLessZero = maxValue < 0


        useEffect(() => {
                if (isEqual || isMaxLessMin || isMinLessZero || isMaxLessZero) {
                    setError(true)
                    setIsDisableInc(true)
                    setIsDisableReset(true)
                } else {
                    setError(false)
                    setIsDisableInc(false)
                    setIsDisableReset(false)
                }
            }, [minValue, maxValue, error]
        )

        useEffect(() => {
            if (counter1 === maxValue) {
                setIsDisableInc(true)
            } else {
                setIsDisableInc(false)
            }

        }, [counter1])

        useEffect(() => {
            if (counter1 === minValue) {
                setIsDisableReset(true)
            } else {
                setIsDisableReset(false)
            }

        }, [counter1])


        return (
            <>
                <div className={s.scoreboard}>
                    {!error ?
                        <Scoreboard maxValue={maxValue}
                                    counter1={counter1}
                                    styles={counter1 === maxValue
                                        ? s.scoreboardMax : ''}/> :
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
