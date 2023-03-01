import React from 'react';
import { render, screen } from '@testing-library/react';
import FriendsListPage from './FriendsListPage';
import { Provider } from 'react-redux';
import { store } from '../../components/store/store';

test('render footer', () => {
  <Provider store={store}>
    render( <FriendsListPage />
    );
  </Provider>
});
