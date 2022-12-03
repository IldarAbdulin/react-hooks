import { useReducer } from 'react';
import { decrement, increment } from './actions';
import reducer from './reducer';

function TestHookUseReducer() {
  const [state, dispath] = useReducer(reducer, {
    counter: 0,
  });
  return (
    <div>
      <button onClick={() => dispath(decrement(1))}>-1</button>
      <button onClick={() => dispath(decrement(2))}>-2</button>
      <span>{state.counter}</span>
      <button onClick={() => dispath(increment(1))}>+1</button>
      <button onClick={() => dispath(increment(2))}>+2</button>
    </div>
  );
}

export default TestHookUseReducer;
