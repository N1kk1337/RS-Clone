/* eslint-disable react/react-in-jsx-scope */
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import './register.scss';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { IUser } from '../types';
import { setUser } from '../store/slices/userAuth';
import { useAppDispatch } from '../../hooks/redux';
import { auth } from '../../firebase';
import { writeUserData } from '../../utils/utils';

function RegisterModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickName, setNickName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleRegister = (event: any, mail:string, pass:string) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, mail, pass)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }));
        const newUser:IUser = {
          userId: user.uid, email: mail, firstName, lastName, nickName,
        };
        writeUserData(newUser);
      })
    // todo сделать более красивую и осмысленную ошибку
    // eslint-disable-next-line no-alert
      .catch(() => alert('Invalid user!'));
    navigate('/user-page');
  };

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { id, value } = e.target;
    if (id === 'firstName' && value) {
      setFirstName(value);
    }
    if (id === 'lastName' && value) {
      setLastName(value);
    }
    if (id === 'email' && value) {
      const isEmailVal: string = value.match(/^[^@\s]+@[^@\s]+\.[a-zA-Z]{0,}$/)
        ?.input as string;
      if (!isEmailVal) setIsEmail(true);
      else setIsEmail(false);
      setEmail(value);
    }
    if (id === 'password' && value) {
      const isPassword = value.match(
        /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/,
      )?.input as string;

      if (!isPassword) {
        setIsPasswordValid(true);
      } else {
        setIsPasswordValid(false);
      }
      setPassword(value);
    }
    if (id === 'confirmPassword') {
      setConfirmPassword(value);

      if (value === password) setConfirmPasswordValid(false);
      else setConfirmPasswordValid(true);
    }
    if (id === 'nickName') {
      setNickName(value);
    }
  }

  return (
    <div id="register" className="register register-active">
      <h2 className="text-center">Sign up</h2>
      <Form onSubmit={(e) => handleRegister(e, email, password)}>
        <Form.Group className="mb-3">
          <Form.Label className="fs-4">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => handleInputChange(e)}
            id="email"
            value={email}
            required
          />
          {isEmail ? <p className="error">Email is not valid</p> : ''}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label className="fs-4">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => handleInputChange(e)}
            id="password"
            value={password}
            required
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
        <Form.Group className="mb-3">
          <Form.Label className="fs-4">Repeat your password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => handleInputChange(e)}
            id="confirmPassword"
            value={confirmPassword}
            required
          />
          {confirmPasswordValid ? (
            <p className="error">Please add correct password</p>
          ) : (
            ''
          )}
        </Form.Group>
        <InputGroup className="mb-3">
          <Form.Label className="fs-4">First name</Form.Label>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="First name"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Label className="fs-4">Last name</Form.Label>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => handleInputChange(e)}
            id="lastName"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Label className="fs-4">Nick name</Form.Label>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Nick name"
            value={nickName}
            onChange={(e) => handleInputChange(e)}
            id="nickName"
          />
        </InputGroup>
        <Button
          variant="primary"
          type="submit"
          disabled={isEmail || isPasswordValid || confirmPasswordValid}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RegisterModal;
