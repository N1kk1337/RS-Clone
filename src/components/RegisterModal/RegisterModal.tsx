/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function BasicExample() {
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [confirmPasswordVal, setConfirmPasswordVal] = useState(false);

  function emailValid(e: React.ChangeEvent) {
    const emailVal = (e.target as HTMLInputElement).value;
    setEmail(emailVal);
    const isEmailVal: string = email.match(/^[^@\s]+@[^@\s]+\.[a-zA-Z]{0,}$/)
      ?.input as string;

    if (!isEmailVal) setIsEmail(true); else setIsEmail(false);
  }

  function passwordValid(e: React.ChangeEvent) {
    const passwordVal = (e.target as HTMLInputElement).value;
    const isPassword = passwordVal.match(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{7,}$/,
    );

    if (!isPassword) {
      setPassword('');
      setIsPasswordValid(true);
    } else {
      setPassword(isPassword[0]);
      setIsPasswordValid(false);
    }
  }

  function confirmPassword(e: React.ChangeEvent) {
    const { value } = e.target as HTMLInputElement;

    if (value === password) setConfirmPasswordVal(false); else setConfirmPasswordVal(true);
  }

  return (
    <div className="register register-active">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => emailValid(e)}
          />
          {isEmail ? <p className="error">Email is not valid</p> : ''}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fs-4">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => passwordValid(e)}
          />
          {!isPasswordValid ? (
            ''
          ) : (
            <p className="error">
              Please use min 7 letter password, symbol, lower case letters and a
              number
            </p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fs-4">Repeat your password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => confirmPassword(e)}
          />
          {confirmPasswordVal ? (
            <p className="error">Please add correct password</p>
          ) : (
            ''
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default BasicExample;
