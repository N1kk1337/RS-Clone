import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createStore, applyMiddleware, Store, AnyAction,
} from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';


// test redux setup
const defaultState = {
  value: 0,
};
// кажется тут какой-то глупый конфликт линтера с тем как написан редьюсер,
// пока не понял, как его решить
// eslint-disable-next-line @typescript-eslint/default-param-last
const reducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    default: return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
