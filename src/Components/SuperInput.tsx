import React, {ChangeEvent} from 'react';
import s from './Style.module.css';
import {TextField} from '@material-ui/core';

type SuperInputType = {
    value: number
    onChange: (value: string)=> void
    label?: string

}

export const SuperInput = ({value, onChange, label }: SuperInputType) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }

    return (
            <TextField id="standard-basic" label={label} size='small' type='number' value={value} onChange={onChangeHandler} className={s.superinput}/>
    );
};

// <Input  placeholder="Hello world" inputProps={{ 'aria-label': 'description' }} type='number' value={value} onChange={onChangeHandler} className={s.superinput}/>

