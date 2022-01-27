import React, {ChangeEvent} from 'react';

type SuperInputType = {
    value: number
    onChange: (value: string)=> void

}

export const SuperInput = ({value, onChange}: SuperInputType) => {

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }

    return (
            <input type="number" value={value} onChange={onChangeHandler}/>
    );
};

