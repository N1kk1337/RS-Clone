import React from 'react';
import { render, screen } from '@testing-library/react';
import FriendsFilter from './FriendsFilters';
import { Provider } from 'react-redux';
import { store } from '../store/store';

test('render footer', () => {
  <Provider store={store}>
    render(<FriendsFilter />);
  </Provider>
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
}));