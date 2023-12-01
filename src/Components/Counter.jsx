// Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../action/action.jsx';
import counterReducer from '../reducers/counterReducer.jsx';

const Counter = () => {
  const mystate = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1 className="counter-value">{mystate}</h1>
      <div className="button-container">
        <button className="action-button increment" onClick={() => dispatch(increment())}>
          +
        </button>
        <button className="action-button decrement" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
