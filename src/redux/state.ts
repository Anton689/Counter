import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counterReducer';

const rootReducer = combineReducers({
    initialState: counterReducer,
});

export const store = createStore(rootReducer)

export type AppStoreType = typeof store
export type GlobalState = ReturnType<typeof rootReducer>