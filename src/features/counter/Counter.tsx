import React, { FunctionComponent, useState } from 'react';
import styles from '../../styles/counter/Counter.module.css';
import { Props } from './index';
import PropTypes from 'prop-types';

const Counter: FunctionComponent<Props> = (props) => {
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <div className={styles.row}>
                <button className={styles.button} aria-label="Increment value" onClick={props.increment}>
                    +
                </button>
                <span className={styles.value}>{props.count}</span>
                <button className={styles.button} aria-label="Decrement value" onClick={props.decrement}>
                    -
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() => {
                        props.incrementByAmount(Number(incrementAmount) || 0);
                    }}
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => {
                        props.incrementAsync(Number(incrementAmount) || 0);
                    }}
                >
                    Add Async
                </button>
            </div>
        </div>
    );
};

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    incrementByAmount: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
};

export default Counter;
