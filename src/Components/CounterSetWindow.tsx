import React, {useState} from 'react';
import s from './Style.module.css';
import {SuperButton} from './SuperButton';
import {SuperInput} from './SuperInput';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from '../redux/state';
import {changeMaxNumberValueAC, changeMinNumberValueAC} from '../redux/actions';

export type CounterSetWindowType = {
    disabled?: boolean
    setValue: () => void
    minValue: number
    maxValue: number
}

export const CounterSetWindow = (props: CounterSetWindowType) => {

    const {
        disabled,
        setValue,
        minValue,
        maxValue,
    } = props

    let [isDisable, setIsDisable] = useState(true)

    const dispatch = useDispatch()

    const setMaxHandler = (value: string) => {
        dispatch(changeMaxNumberValueAC(parseInt(value)))
        setIsDisable(false)
    }
    const setMinHandler = (value: string) => {
        dispatch(changeMinNumberValueAC(parseInt(value)))
        setIsDisable(false)
    }

    const onClickSetHandler = () => {
        setValue()
        setIsDisable(true)
    }

    return (
        <div>
            <div className={s.counterSet}>

                <div className={s.setMaxInput}>
                    <SuperInput label="MAX" value={maxValue} onChange={setMaxHandler}/>
                </div>

                <div className={s.setMinInput}>
                    <SuperInput label="MIN" value={minValue} onChange={setMinHandler}/>
                </div>
            </div>
            <div className={s.setButton}>
                <SuperButton name={'Set'} onClick={onClickSetHandler} disabled={isDisable}/>
            </div>

        </div>

    );
};