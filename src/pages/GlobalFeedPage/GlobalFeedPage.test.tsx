import React from 'react';
import { render, screen } from '@testing-library/react';
import GlobalFeedPage from './GlobalFeedPage';
import { Provider } from 'react-redux';
import { store } from '../../components/store/store';

test('render footer', () => {
  <Provider store={store}>
    render( <GlobalFeedPage />
    );
  </Provider>
});
