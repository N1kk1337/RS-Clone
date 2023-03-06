import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';
import { Provider } from 'react-redux';
import { store } from '../../components/store/store';

test('render footer', () => {
  <Provider store={store}>
    render( <NotFoundPage />
    );
  </Provider>
});

test("render id", () => {
  render(<NotFoundPage />);
  const divText = screen.getByTestId('not-found-page');
  expect(divText).toBeInTheDocument();
});
