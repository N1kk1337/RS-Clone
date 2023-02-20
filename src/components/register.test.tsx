import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import RegisterModal from './RegisterModal/RegisterModal';

test('shuold have useremail', () => {
  render(<RegisterModal />);
  const email = screen.getByText(/email/i);
  expect(email).toBeInTheDocument();
});
test('shuold have password', () => {
  render(<RegisterModal />);
  const password = screen.getByText(/Repeat your password/i);
  expect(password).toBeInTheDocument();
});
test('shuold have First name', () => {
  render(<RegisterModal />);
  const firstName = screen.getByText(/First name/i);
  expect(firstName).toBeInTheDocument();
});
test('shuold have Last name', () => {
  render(<RegisterModal />);
  const lastName = screen.getByText(/Last name/i);
  expect(lastName).toBeInTheDocument();
});
test('shuold have Nick name', () => {
  render(<RegisterModal />);
  const nickName = screen.getByText(/Nick name/i);
  expect(nickName).toBeInTheDocument();
});
