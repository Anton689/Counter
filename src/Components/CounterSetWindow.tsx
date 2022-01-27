import React, {useState} from 'react';
import s from './Style.module.css';
import {Button} from './Button';
import {SuperInput} from './SuperInput';

export type CounterSetWindowType = {
    maxNumberValue: number
    minNumberValue: number
    disabled?: boolean
    setValue: () => void
    setMinNumberValue: (value: number) => void
    setMaxNumberValue: (value: number) => void
    counter: number
    resetAll: () => void
}

export const CounterSetWindow = ({

                                     maxNumberValue,
                                     minNumberValue,
                                     ...props
                                 }: CounterSetWindowType) => {

    let [isDisable, setIsDisable] = useState(true)


    const setMaxHandler = (value: string) => {
        props.setMaxNumberValue(parseInt(value))
        setIsDisable(false)
    }
    const setMinHandler = (value: string) => {
        props.setMinNumberValue(parseInt(value))
        setIsDisable(false)
    }

    const onClickSetHandler = () => {
        props.setValue()
        setIsDisable(true)
    }

    const resetAllHandler = () => {
        props.resetAll()
        setIsDisable(true)
    }

    return (
        <div>
            <div className={s.App}>
                <div className={s.setOptions}>
                    <div>
                        <span>max value: </span> <span> <SuperInput value={maxNumberValue}
                                                                    onChange={setMaxHandler}/> </span>
                    </div>
                    <div>
                        <span>min value: </span> <span> <SuperInput value={minNumberValue}
                                                                    onChange={setMinHandler}/> </span>
                    </div>
                </div>
                <div className={s.setButton}>
                    <Button name={'Set'} onClick={onClickSetHandler} disabled={isDisable}/>
                    <Button name={'Reset all '} onClick={resetAllHandler} />
                </div>

            </div>
        </div>
    );
};

// <input type="number" value={maxValue}
//        onChange={onMaxChangeHandler}/>
//
// <input type="number" value={minValue}
//        onChange={onMinChangeHandler}/>