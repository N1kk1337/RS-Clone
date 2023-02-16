/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import './register.scss';
import axios from 'axios';
import { User } from '../types';

interface UserRegister {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  nickName: string;
  confirmPassword: string;
}

const baseUrl = 'http://localhost:3004/users';

function BasicExample() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickName, setNickName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const [emailMessage, setEmailMessage] = useState('');

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { id, value } = e.target;
    if (id === 'firstName') {
      setFirstName(value);
    }
    if (id === 'lastName') {
      setLastName(value);
    }
    if (id === 'email') {
      const isEmailVal: string = value.match(/^[^@\s]+@[^@\s]+\.[a-zA-Z]{0,}$/)
        ?.input as string;
      if (!isEmailVal) setIsEmail(true);
      else setIsEmail(false);
      setEmail(isEmailVal);
    }
    if (id === 'password') {
      const isPassword = value.match(
        /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/,
      )?.input as string;

      if (!isPassword) {
        setIsPasswordValid(true);
      } else {
        setIsPasswordValid(false);
      }
      setPassword(isPassword);
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
  useEffect(() => {
    async function usersGet() {
      const response = await axios.get(baseUrl);
      setUsers(response.data);
    }
    usersGet();
  }, [email]);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body: UserRegister = {
      firstName,
      nickName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    try {
      const isValid = users.filter((user: User) => user.email === body.email);

      if (isValid.length > 0) {
        setEmailMessage('This email is busy');
      } else {
        axios.post(baseUrl, body);
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setNickName('');
        setConfirmPassword('');
        setEmailMessage('');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="register register-active">
      <h2 className="text-center">Sign up</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
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
          {emailMessage ? <p className="error">{ emailMessage }</p> : ''}
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

export default BasicExample;
