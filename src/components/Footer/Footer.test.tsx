import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Link } from 'react-router-dom';

test('render footer', () => {
  <Provider store={store}>
    render(<Footer />);
  </Provider>
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
}));