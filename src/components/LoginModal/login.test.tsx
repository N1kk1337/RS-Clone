import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import LoginModal from './LoginModal';

test('shuold have useremail and a password field', () => {
  render(<LoginModal />);
  const email = screen.getByText(/Email address/i);
  expect(email).toBeInTheDocument();
});
test('shuold have useremail field', () => {
  render(<LoginModal />);
  const password = screen.getByText(/Password/i);
  expect(password).toBeInTheDocument();
});
