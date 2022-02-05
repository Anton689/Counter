export type CounterState = {
    minNumberValue: number
    maxNumberValue: number
    counter: number
}

const initialState: CounterState = {
    minNumberValue: 0,
    maxNumberValue: 0,
    counter: 0,
}

export const counterReducer = (state = initialState, action: any): CounterState => {

    switch (action.type) {
        case 'sd':
            return state
        default:
            return state;
    }
}