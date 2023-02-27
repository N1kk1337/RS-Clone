import axios from 'axios';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../store/slices/userAuth';
import { IUser } from '../types';
import './LoginModal.scss';

interface UserRegister {
  email: string;
  password: string;
}

function LoginModal() {
  const router = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (event:any, mail: string, pass: string) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, mail, pass)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }));
        navigate('/user-page');
      })
      .catch(() => alert('Invalid user!'));
  };

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
  // useEffect(() => {
  //   async function usersGet() {
  //     const response = await axios.get(baseUrl);
  //     setUsers(response.data);
  //   }
  //   usersGet();
  // }, [email]);
  // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   const body: UserRegister = {
  //     email,
  //     password,
  //   };
  //   try {
  //     const isValid: IUser[] = users.filter((user: IUser) => user.email === body.email);
  //     if (isValid.length > 0) {
  //       setPasswordMessage('Password is wrong!');
  //       if (body.password === isValid[0].password) {
  //         document.cookie = `login=${isValid[0].id}`;
  //         router('/user-page');
  //       }
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div className="login login-active">
      <h2 className="text-center">Sign in</h2>
      <Form onSubmit={(e) => handleLogin(e, email, password)}>
        <Form.Group className="mb-3">
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

        <Form.Group className="mb-3">
          <Form.Label className="fs-4">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => inputChangeHandler(e)}
            id="password"
            value={password}
            required
          />
          {
            passwordMessage
              ? <p className="error">{ passwordMessage }</p>
              : ''
          }
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
