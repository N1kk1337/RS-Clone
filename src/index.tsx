import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import App from './App';
import store from './components/store/store';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <HashRouter>
          <App />
          <ReactQueryDevtools />
        </HashRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
