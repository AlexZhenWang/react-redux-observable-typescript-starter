import { CounterActionTypes, INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT, INCREMENT_ASYNC } from './types';

export function increment(): CounterActionTypes {
    return {
        type: INCREMENT,
    };
}

export function incrementByAmount(amount: number): CounterActionTypes {
    return {
        type: INCREMENT_BY_AMOUNT,
        payload: amount,
    };
}

export function decrement(): CounterActionTypes {
    return {
        type: DECREMENT,
    };
}

export function incrementAsync(amount: number): CounterActionTypes {
    return {
        type: INCREMENT_ASYNC,
        payload: amount,
    };
}
