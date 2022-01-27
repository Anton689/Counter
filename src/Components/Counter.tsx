import React, {useEffect, useState} from 'react';
import s from './Style.module.css';
import {Scoreboard} from './Scoreboard';
import {Button} from './Button';

type CounterPropsType = {
    minNumberValue: number
    maxNumberValue: number
    counter: number
    increaseButton: () => void
    resetButton: () => void

}
export const Counter = ({minNumberValue,maxNumberValue,counter,increaseButton,resetButton }: CounterPropsType) => {

    let [error, setError] = useState(false)
    let [isDisableInc, setIsDisableInc] = useState(true)
    let [isDisableReset, setIsDisableReset] = useState(true)

    useEffect(()=> {
        if (minNumberValue === maxNumberValue || maxNumberValue < minNumberValue || minNumberValue < 0 || maxNumberValue < 0){
            setError(true)
            setIsDisableInc(true)
            setIsDisableReset(true)
        }else{
            setError(false)
            setIsDisableInc(false)
            setIsDisableReset(false)
        }
    }, [minNumberValue,maxNumberValue,error ])

    useEffect(()=> {
        if (counter === maxNumberValue){
            setIsDisableInc(true)
        }else{
            setIsDisableInc(false)
        }

    }, [counter])

    useEffect(()=> {
        if (counter === minNumberValue){
            setIsDisableReset(true)
        }else{
            setIsDisableReset(false)
        }

    }, [counter])


    return (
        <div>
            <div className={s.App}>
                <div className={s.Scoreboard}>
                    {!error ? <Scoreboard counter={counter} styles={counter === maxNumberValue ? s.scoreboardMax : ''}/> : <div>ERRROR</div>}

                </div>
                <div className={s.buttons}>
                    <Button
                        name={'Inc'}
                        onClick={increaseButton}
                        disabled={isDisableInc }
                    />
                    <Button
                        name={'Reset'}
                        onClick={resetButton}
                        disabled={isDisableReset}
                    />
                </div>
            </div>
        </div>
    );
};
