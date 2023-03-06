import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from './UserInfo';
import { Provider } from 'react-redux';
import { store } from '../store/store';

test('render footer', () => {
  <Provider store={store}>
    render( <UserInfo />
    );
  </Provider>
});
