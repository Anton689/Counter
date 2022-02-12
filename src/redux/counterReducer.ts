import {ActionsType, CHANGE_COUNTER_VALUE, CHANGE_MAX_VALUE, CHANGE_MIN_VALUE, RESET_VALUE} from './actions';

const initialState = {
    minNumberValue: 0,
    maxNumberValue: 0,
    counter: 0,
}

type InitialStateType = typeof initialState

export const counterReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case CHANGE_MIN_VALUE:
            return {...state, minNumberValue: action.payload }
        case CHANGE_MAX_VALUE:
            return {...state, maxNumberValue: action.payload }
        case CHANGE_COUNTER_VALUE :
            return {...state, counter: state.counter < state.maxNumberValue ? state.counter + 1 : state.counter}
        case RESET_VALUE :
            return {...state, counter: state.minNumberValue}
        default:
            return state;
    }
}

//{...state, minNumberValue: state.counter < state.maxNumberValue ? state.counter + 1 : state.counter}

