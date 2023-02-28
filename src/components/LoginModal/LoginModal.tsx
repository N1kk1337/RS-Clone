import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../store/slices/userAuth';
import './LoginModal.scss';

function LoginModal() {
  const [t] = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmail, setIsEmail] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (event:any, mail: string, pass: string) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, mail, pass)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }));
        navigate('/user-page');
      })
      // todo сделать красивую ошибку
      // eslint-disable-next-line no-alert
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
      if (isEmailVal !== undefined) {
        setEmail(isEmailVal);
      }
    }
    if (id === 'password') {
      if (value !== undefined) {
        setPassword(value);
      }
    }
  }

  return (
    <div id="login" className="login login-active">
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

        </Form.Group>
        <Button variant="primary" type="submit" disabled={isEmail}>
          {t('button.sign_in')}
        </Button>
      </Form>
    </div>
  );
}

export default LoginModal;
