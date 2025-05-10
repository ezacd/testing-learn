import '@testing-library/jest-dom';
import { RootState } from './store/store';
import { getCounterValue } from './store/reducers/getCounterValue/getCounterValue';
import counterReducer, {
  decrement,
  increment,
} from '@/store/reducers/counterReducer';

describe('redux', () => {
  test('test', () => {
    const fakeState: RootState = {
      counter: { value: 0 },
    };

    expect(getCounterValue(fakeState)).toBe(0);
  });
});

describe('reducers', () => {
  test('increment', () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });

  test('decrement', () => {
    expect(counterReducer({ value: 0 }, decrement())).toEqual({ value: -1 });
  });

  test('empty', () => {
    expect(counterReducer(undefined, increment())).toEqual({ value: 1 });
  });
});
