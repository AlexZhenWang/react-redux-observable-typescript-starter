import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../../store/rootReducer';
import Counter from './Counter';
import { increment, incrementByAmount, decrement, incrementAsync } from '../../store/counter/actions';

const mapStateToProps = (state: RootState) => ({
    count: state.counterReducer.value,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: () => dispatch(increment()),
    incrementByAmount: (amount: number) => dispatch(incrementByAmount(amount)),
    decrement: () => dispatch(decrement()),
    incrementAsync: (amount: number) => dispatch(incrementAsync(amount)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
export type Props = ConnectedProps<typeof connector>;

export default connector(Counter);
