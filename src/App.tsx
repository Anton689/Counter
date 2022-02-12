import React, {useEffect} from 'react';
import './App.css';
import s from './Components/Style.module.css';
import {Counter} from './Components/Counter';
import {CounterSetWindow} from './Components/CounterSetWindow';
import {Box} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalState} from './redux/state';
import {changeCounterValueAC, changeMaxNumberValueAC, changeMinNumberValueAC, resetValueAC} from './redux/actions';

function App() {

    const minValue = useSelector<GlobalState, number>(state => state.initialState.minNumberValue)
    const maxValue = useSelector<GlobalState, number>(state => state.initialState.maxNumberValue)
    const counter1 = useSelector<GlobalState, number>(state => state.initialState.counter)

    const dispatch = useDispatch()

    const increaseButton = () => dispatch(changeCounterValueAC())

    const resetButton = () => dispatch(resetValueAC())

    const setValue = () => {
        localStorage.setItem('minNumber', JSON.stringify(minValue))
        localStorage.setItem('maxNumber', JSON.stringify(maxValue))

        dispatch(changeMinNumberValueAC(minValue))
        dispatch(changeMaxNumberValueAC(maxValue))
        dispatch(resetValueAC())
    }

    useEffect(()=>{
        const minValue = localStorage.getItem('minNumber')
        const maxValue = localStorage.getItem('maxNumber')

        if (minValue && maxValue){
            dispatch(changeMaxNumberValueAC(parseInt(maxValue)))
            dispatch(changeMinNumberValueAC(parseInt(minValue)))
        }
        dispatch(resetValueAC())
    },[])

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
                    setValue={setValue}/>
            </Box>

        </div>

    );
}

export default App;
