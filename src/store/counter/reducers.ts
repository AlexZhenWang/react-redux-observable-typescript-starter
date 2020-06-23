import { CounterActionTypes, INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from './types';

export interface ICounterState {
    value: number;
}

const initialState: ICounterState = {
    value: 0,
};

export function counterReducer(state = initialState, action: CounterActionTypes): ICounterState {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            };
        case INCREMENT_BY_AMOUNT:
            return {
                ...state,
                value: state.value + action.payload,
            };
        default:
            return state;
    }
}
