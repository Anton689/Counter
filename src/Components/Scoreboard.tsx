import React from 'react';
import s from './Style.module.css';

type propsType = {
    counter: number;
    maxNumberValue: number;
}

export function Scoreboard({counter, maxNumberValue}: propsType) {

    const inputStyle = counter === maxNumberValue ? s.scoreboardMax : '';

    return <div>
        <input value={counter} className={inputStyle} readOnly/>
    </div>
}
