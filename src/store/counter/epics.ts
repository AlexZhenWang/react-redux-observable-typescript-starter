import { IncrementAsyncAction, INCREMENT_ASYNC } from './types';
import { Epic, ofType } from 'redux-observable';
import { RootState } from '../../store/rootReducer';
import { switchMap } from 'rxjs/operators';
import { incrementByAmount } from './actions';

export const incrementAsyncEpic: Epic<IncrementAsyncAction, any, RootState> = (action$) =>
    action$.pipe(
        ofType(INCREMENT_ASYNC),
        switchMap(async ({ payload }) => {
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 1000);
            });
            return incrementByAmount(payload);
        }),
    );

export default [incrementAsyncEpic];
