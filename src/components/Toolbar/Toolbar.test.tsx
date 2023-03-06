import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Toolbar from './Toolbar';

test('should render text component', () => {
  render(<Toolbar />);
});
