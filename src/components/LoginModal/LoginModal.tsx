import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './LoginModal.scss';

interface UserRegister {
  email: string;
  password: string;
}
const baseUrl = 'https://reqres.in/api/posts';

function LoginModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  function inputChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { id, value } = e.target;
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
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body: UserRegister = {
      email,
      password,
    };
    try {
      axios.post(baseUrl, body);

      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="login login-active">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => inputChangeHandler(e)}
            id="email"
            value={email}
            required
          />
          {isEmail ? <p className="error">Email is not valid</p> : ''}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fs-4">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => inputChangeHandler(e)}
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
        <Button variant="primary" type="submit" disabled={isEmail || isPasswordValid}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginModal;
