import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginModal from './LoginModal';
import { Provider } from 'react-redux';
import { store } from '../store/store';

test('render footer', () => {
  <Provider store={store}>
    render( <LoginModal show={false} onHide={() => true} />
    );
  </Provider>
});