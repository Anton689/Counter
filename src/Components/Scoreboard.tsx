import React from 'react';
import {Input} from '@material-ui/core';

type propsType = {
    counter1: number;
    styles: any;
    maxValue: number;

}
export function Scoreboard(props: propsType) {

    const {counter1,styles,maxValue,} = props

    const styleInput = counter1 === maxValue
        ? <Input defaultValue="Error" error inputProps={{ 'aria-label': 'description' }} value={counter1} className={styles} readOnly/>
        : <Input defaultValue="" inputProps={{ 'aria-label': 'description' }} value={counter1} className={styles} readOnly/>

    return <div>
        {styleInput}
        {/*<Input defaultValue="" inputProps={{ 'aria-label': 'description' }} value={counter} className={styles} readOnly/>*/}
    </div>
}
