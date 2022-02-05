import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counterReducer';

const reducer = combineReducers({
    initialState: counterReducer,
});

export type GlobalState = ReturnType<typeof reducer>

export const store = createStore(reducer)