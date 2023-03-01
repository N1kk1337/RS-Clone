import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';
import { Provider } from 'react-redux';
import { store } from '../../components/store/store';

test('render footer', () => {
  <Provider store={store}>
    render( <LandingPage />
    );
  </Provider>
});
