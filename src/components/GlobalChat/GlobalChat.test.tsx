import React from 'react';
import { Provider } from 'react-redux';
import GlobalChat from './GlobalChat';
import { store } from '../store/store';

test('render footer', () => {
  <Provider store={store}>
    render(
    <GlobalChat />
    );
  </Provider>;
});
