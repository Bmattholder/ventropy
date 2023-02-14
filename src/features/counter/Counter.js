import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Incremenet
        </button> <br />
        <span>{count}</span> <br />
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
