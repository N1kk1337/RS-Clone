import React from 'react';
import { render, screen } from '@testing-library/react';
import RegisterModal from './RegisterModal';
import { Provider } from 'react-redux';
import { store } from '../store/store';

test('render footer', () => {
  <Provider store={store}>
    render( <RegisterModal show={true} onHide={() => !true} />
    );
  </Provider>
});