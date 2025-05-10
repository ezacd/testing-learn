import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from './store/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={createStore({ value: 0 })}>
      <App />
    </Provider>
  </StrictMode>,
);
