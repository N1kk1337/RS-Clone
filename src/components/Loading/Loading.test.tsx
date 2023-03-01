import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';
import { Provider } from 'react-redux';
import { store } from '../store/store';

test('render footer', () => {
  <Provider store={store}>
    render(<Loading />);
  </Provider>
});

test("render id", () => {
  render(<Loading />);
  const divText = screen.getByTestId('loading');
  expect(divText).toBeInTheDocument();
});