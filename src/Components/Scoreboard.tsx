import React from 'react';

type propsType = {
    counter: number;
    styles: any;
}

export function Scoreboard({counter, styles}: propsType) {

    return <div>
        <input value={counter} className={styles} readOnly/>
    </div>
}
