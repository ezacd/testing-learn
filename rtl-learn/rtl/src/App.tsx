import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { decrement, increment } from './store/reducers/counterReducer';
import { getCounterValue } from './store/reducers/getCounterValue/getCounterValue';
import Hello from './pages/Hello';

export default function App() {
  const count = useSelector((state: RootState) => getCounterValue(state));
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <Hello />
    </div>
  );
}
