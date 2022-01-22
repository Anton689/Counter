import React from 'react';
import s from './Style.module.css';
import {Scoreboard} from './Scoreboard';
import {Button} from './Button';

type CounterPropsType = {
    minNumberValue: number
    maxNumberValue: number
    counter: number
    increaseButton: () => void
    resetButton: () => void
}


export const Counter = ({minNumberValue,maxNumberValue,counter,increaseButton,resetButton,...props }: CounterPropsType) => {

    // Disable вынес в Counter т.к. данный функционал считаю простым и нет смысла держать его в родителе.
    const isDisableIncButton = (counter === maxNumberValue);
    const isDisableResetButton = (counter === minNumberValue);

    return (
        <div>
            <div className={s.App}>
                <div className={s.Scoreboard}>
                    <Scoreboard counter={counter} maxNumberValue={maxNumberValue}/>
                </div>
                <div className={s.buttons}>
                    <Button
                        name={'Inc'}
                        onClick={increaseButton}
                        disabled={isDisableIncButton}
                    />
                    <Button
                        name={'Reset'}
                        onClick={resetButton}
                        disabled={isDisableResetButton}
                    />
                </div>
            </div>
        </div>
    );
};
