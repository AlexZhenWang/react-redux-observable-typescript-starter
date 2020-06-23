export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT';
export const INCREMENT_ASYNC = 'DECREMENT_ASYNC';

export interface IncrementAction {
    type: typeof INCREMENT;
}

export interface DecrementAction {
    type: typeof DECREMENT;
}

export interface IncrementByAmountAction {
    type: typeof INCREMENT_BY_AMOUNT;
    payload: number;
}

export interface IncrementAsyncAction {
    type: typeof INCREMENT_ASYNC;
    payload: number;
}

export type CounterActionTypes = IncrementAction | DecrementAction | IncrementByAmountAction | IncrementAsyncAction;
