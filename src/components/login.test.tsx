import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import LoginModal from './LoginModal/LoginModal';

test('shuold have useremail and a password field', () => {
  render(<LoginModal />);
  const email = screen.getByText(/email/i);
  expect(email).toBeInTheDocument();
});
test('shuold have useremail field', () => {
  render(<LoginModal />);
  const password = screen.getByText(/password/i);
  expect(password).toBeInTheDocument();
});
test('shuold have button field', () => {
  render(<LoginModal />);
  const submitBtn = screen.getByText(/submit/i);
  expect(submitBtn).toBeInTheDocument();
});
