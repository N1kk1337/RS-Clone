import React from 'react';
import { render, screen } from '@testing-library/react';
import UpDateUserModal from './UpDateUserModal';
import { Provider } from 'react-redux';
import { store } from '../store/store';

test('render footer', () => {
  <Provider store={store}>
    render(<UpDateUserModal onHide={() => false} show={true}
    />);
  </Provider>
});
