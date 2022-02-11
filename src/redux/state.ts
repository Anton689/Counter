import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counterReducer';

const rootReducer = combineReducers({
    initialState: counterReducer,
});

export type GlobalState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)