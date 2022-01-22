import React, {useState, ChangeEvent, useEffect} from 'react';
import './App.css';
import s from './Components/Style.module.css';
import {Counter} from './Components/Counter';
import {CounterSetWindow} from './Components/CounterSetWindow';

function App() {

    // let minNumber: number = 0;
    // let maxNumber: number = 4;

    let [minNumberValue, setMinNumberValue] = useState(JSON.parse(localStorage.getItem('minNumber') || '0'));
    let [maxNumberValue, setMaxNumberValue] = useState(JSON.parse(localStorage.getItem('maxNumber') || '0'));
    let [counter, setCounter] = useState<number>(minNumberValue);


    const setValue = () => {
        localStorage.setItem('minNumber', JSON.stringify(minNumberValue))
        localStorage.setItem('maxNumber', JSON.stringify(maxNumberValue))
        setCounter(minNumberValue)

    }


    // const changeMaxValue = (value: number) => {
    //     setMaxNumberValue(value)
    // }
    //
    // const changeMinValue = (value: number) => {
    //     setMinNumberValue(value)
    //     setCounter(value)
    // }


    const increaseButton = () => counter < maxNumberValue ? setCounter(++counter) : counter

    const resetButton = () => setCounter(minNumberValue)

    return (
        <div>
            <Counter counter={counter}
                     maxNumberValue={maxNumberValue}
                     increaseButton={increaseButton}
                     resetButton={resetButton}
                     minNumberValue={minNumberValue}/>

            <CounterSetWindow
                minNumberValue={minNumberValue}
                setValue={setValue}
                maxNumberValue={maxNumberValue}
                setMinNumberValue={setMinNumberValue}
                setMaxNumberValue={setMaxNumberValue}
                counter={counter}/>
                {/*// changeMaxValue={}*/}
                {/*// changeMinValue={}/>*/}
        </div>
    );
}

export default App;
