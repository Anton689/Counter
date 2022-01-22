import React, {useState, ChangeEvent} from 'react';

type SuperInputType = {
    value: number
    onChange: (value: number)=> void

}

export const SuperInput = ({value, onChange, ...props}: SuperInputType) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        onChange(parseInt(e.currentTarget.value))
    }

    return (
            <input type="number" value={value} onChange={onChangeHandler}/>
    );
};

