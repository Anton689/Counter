import React, {ChangeEvent, useState} from 'react';
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
}

export const CounterSetWindow = ({

                                     maxNumberValue,
                                     minNumberValue,
                                     ...props
                                 }: CounterSetWindowType) => {
//    const dis =  (minNumberValue === minNumberValue) && (maxNumberValue === maxNumberValue)
    return (
        <div>
            <div className={s.App}>
                <div className={s.setOptions}>
                    <div>
                        <span>max value: </span> <span> <SuperInput value={maxNumberValue}
                                                                    onChange={props.setMaxNumberValue}/> </span>
                    </div>
                    <div>
                        <span>min value: </span> <span> <SuperInput value={minNumberValue}
                                                                    onChange={props.setMinNumberValue}/> </span>
                    </div>
                </div>
                <div className={s.setButton}>
                    <Button name={'set'} onClick={props.setValue} />
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