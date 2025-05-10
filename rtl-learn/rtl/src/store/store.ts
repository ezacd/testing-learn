import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';

export const createStore = (initialValue = { value: 0 }) => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
    preloadedState: {
      counter: initialValue ? initialValue : { value: 0 },
    },
  });
};

const tempStore = createStore({ value: 0 });
export type RootState = ReturnType<typeof tempStore.getState>;
export type AppDispatch = typeof tempStore.dispatch;
