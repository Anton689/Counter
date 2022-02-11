import React, {useState} from 'react';
import './App.css';
import s from './Components/Style.module.css';
import {Counter} from './Components/Counter';
import {CounterSetWindow} from './Components/CounterSetWindow';
import {Box, Container, Paper} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from './redux/state';
import {changeCounterValueAC, resetValueAC} from './redux/actions';

function App() {

    //let startValueString = '0'

    const minValue = useSelector<GlobalState, number>(state => state.initialState.minNumberValue)
    const maxValue = useSelector<GlobalState, number>(state => state.initialState.maxNumberValue)
    const counter1 = useSelector<GlobalState, number>(state => state.initialState.counter)

    const dispatch = useDispatch()

    // const setValue = () => {
    //     localStorage.setItem('minNumber', JSON.stringify(minNumberValue))
    //     localStorage.setItem('maxNumber', JSON.stringify(maxNumberValue))
    //     setCounter(minNumberValue)
    //
    // }

    const increaseButton = () => dispatch(changeCounterValueAC())


    const resetButton = () => dispatch(resetValueAC())

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
                <Counter
                         counter1={counter1}
                         minValue={minValue}
                         maxValue={maxValue}
                         increaseButton={increaseButton}
                         resetButton={resetButton}/>
            </Box>
            <Box borderColor="primary.main"
                 borderRadius={16}
                 className={s.CounterSetWindow}>
                <CounterSetWindow
                    minValue={minValue}
                    maxValue={maxValue}
                    setValue={()=>{}}
                    /* resetAll={resetAll} *//>
            </Box>

        </div>

    );
}

export default App;
