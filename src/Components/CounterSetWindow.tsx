import React, {useState} from 'react';
import s from './Style.module.css';
import {SuperButton} from './SuperButton';
import {SuperInput} from './SuperInput';

export type CounterSetWindowType = {
    maxNumberValue: number
    minNumberValue: number
    disabled?: boolean
    setValue: () => void
    setMinNumberValue: (value: number) => void
    setMaxNumberValue: (value: number) => void
    counter: number
    // resetAll: () => void
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

    // const resetAllHandler = () => {
    //     props.resetAll()
    //     setIsDisable(true)
    // }

    return (
            <div >
                <div className={s.counterSet}>

                    <div className={s.setMaxInput}>
                        <SuperInput label="MAX" value={maxNumberValue} onChange={setMaxHandler}/>
                    </div>

                    <div className={s.setMinInput}>
                        <SuperInput label="MIN" value={minNumberValue} onChange={setMinHandler}/>
                    </div>
                </div>
                <div className={s.setButton}>
                    <SuperButton name={'Set'} onClick={onClickSetHandler} disabled={isDisable}/>
                </div>

            </div>

    );
};

// <input type="number" value={maxValue}
//        onChange={onMaxChangeHandler}/>
//
// <input type="number" value={minValue}
//        onChange={onMinChangeHandler}/>