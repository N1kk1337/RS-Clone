import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import LoginModal from './LoginModal';

test('shuold have useremail and a password field', () => {
  const [showLogin, setShowLogin] = useState(false);

  render(<LoginModal show={showLogin} onHide={() => setShowLogin(!showLogin)} />);
  const email = screen.getByText(/Email address/i);
  expect(email).toBeInTheDocument();
});
test('shuold have useremail field', () => {
  const [showLogin, setShowLogin] = useState(false);

  render(<LoginModal show={showLogin} onHide={() => setShowLogin(!showLogin)} />);
  const password = screen.getByText(/Password/i);
  expect(password).toBeInTheDocument();
});
