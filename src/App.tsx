import React, {useState} from 'react';
import './App.css';
import s from './Components/Style.module.css';
import {Counter} from './Components/Counter';
import {CounterSetWindow} from './Components/CounterSetWindow';
import {Box, Container, Paper} from '@material-ui/core';

function App() {

    // let minNumber: number = 0;
    // let maxNumber: number = 4;
    let startValueString = '0'
    let startValueNumber = '0'

    let [minNumberValue, setMinNumberValue] = useState(JSON.parse(localStorage.getItem('minNumber') || startValueString));
    let [maxNumberValue, setMaxNumberValue] = useState(JSON.parse(localStorage.getItem('maxNumber') || startValueString));
    let [counter, setCounter] = useState<number>(minNumberValue);


    const setValue = () => {
        localStorage.setItem('minNumber', JSON.stringify(minNumberValue))
        localStorage.setItem('maxNumber', JSON.stringify(maxNumberValue))
        setCounter(minNumberValue)

    }

    const increaseButton = () => counter < maxNumberValue ? setCounter(counter + 1) : counter

    const resetButton = () => setCounter(minNumberValue)

    // const resetAll = () => {
    //     localStorage.clear()
    //     setMinNumberValue(startValueString)
    //     setMaxNumberValue(startValueString)
    //     setCounter(startValueNumber)
    // }


    return (

        <div className={s.container}>

                <Box borderColor="primary.main"
                     borderRadius={16}
                     className={s.Counter}>
                    <Counter counter={counter}
                             maxNumberValue={maxNumberValue}
                             increaseButton={increaseButton}
                             resetButton={resetButton}
                             minNumberValue={minNumberValue}/>

                </Box>



            <Box borderColor="primary.main"
                 borderRadius={16}
                 className={s.CounterSetWindow}>
                <CounterSetWindow
                    minNumberValue={minNumberValue}
                    setValue={setValue}
                    maxNumberValue={maxNumberValue}
                    setMinNumberValue={setMinNumberValue}
                    setMaxNumberValue={setMaxNumberValue}
                    counter={counter}
                    /* resetAll={resetAll} *//>
            </Box>

        </div>

    );
}

export default App;
