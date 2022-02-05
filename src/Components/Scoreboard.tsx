import React from 'react';
import {Input} from '@material-ui/core';

type propsType = {
    counter: number;
    styles: any;
    maxNumberValue:number

}



export function Scoreboard({counter, styles, maxNumberValue}: propsType) {

    const styleInput = counter === maxNumberValue ? <Input defaultValue="Error" error inputProps={{ 'aria-label': 'description' }} value={counter} className={styles} readOnly/>
        : <Input defaultValue="" inputProps={{ 'aria-label': 'description' }} value={counter} className={styles} readOnly/>

    return <div>
        {styleInput}
        {/*<Input defaultValue="" inputProps={{ 'aria-label': 'description' }} value={counter} className={styles} readOnly/>*/}
    </div>
}
