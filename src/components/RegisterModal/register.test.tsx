import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import RegisterModal from './RegisterModal';

test('shuold have Email address', () => {
  const [showRegister, setShowRegister] = useState(false);

  render(<RegisterModal show={showRegister} onHide={() => setShowRegister(false)} />);
  const email = screen.getByText(/Email address/i);
  expect(email).toBeInTheDocument();
});
test('shuold have password', () => {
  const [showRegister, setShowRegister] = useState(false);

  render(<RegisterModal show={showRegister} onHide={() => setShowRegister(false)} />);
  const password = screen.getByText(/Repeat your password/i);
  expect(password).toBeInTheDocument();
});
test('shuold have First name', () => {
  const [showRegister, setShowRegister] = useState(false);

  render(<RegisterModal show={showRegister} onHide={() => setShowRegister(false)} />);
  const firstName = screen.getByText(/First name/i);
  expect(firstName).toBeInTheDocument();
});
test('shuold have Last name', () => {
  const [showRegister, setShowRegister] = useState(false);

  render(<RegisterModal show={showRegister} onHide={() => setShowRegister(false)} />);
  const lastName = screen.getByText(/Last name/i);
  expect(lastName).toBeInTheDocument();
});
test('shuold have Nick name', () => {
  const [showRegister, setShowRegister] = useState(false);

  render(<RegisterModal show={showRegister} onHide={() => setShowRegister(false)} />);
  const nickName = screen.getByText(/Nick name/i);
  expect(nickName).toBeInTheDocument();
});
