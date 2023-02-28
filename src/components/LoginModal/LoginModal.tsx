import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAppDispatch } from '../../hooks/redux';
import { setUser } from '../store/slices/userAuth';
import './LoginModal.scss';

type Props = {
  show:boolean;
  onHide:()=>void;
};

function LoginModal({ show, onHide }:Props) {
  const [t] = useTranslation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

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
      const emailValidation = value.match(/^[^@\s]+@[^@\s]+\.[a-zA-Z]{0,}$/);
      if (!emailValidation) {
        setIsEmailValid(true);
      } else { setIsEmailValid(false); }
      if (value !== undefined) {
        setEmail(value);
      }
    }
    if (id === 'password') {
      setPassword(value);
    }
  }

  return (
    <Modal show={show} onHide={onHide} id="login">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {t('button.sign_in')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="fs-4">{t('validation.email')}</Form.Label>
            <Form.Control
              type="email"
              placeholder={`${t('validation.email')}`}
              onChange={(e) => inputChangeHandler(e)}
              id="email"
              value={email}
              required
            />
            {isEmailValid ? <p className="error">{t('validation.email-error')}</p> : ''}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fs-4">{t('validation.password')}</Form.Label>
            <Form.Control
              type="password"
              placeholder={`${t('validation.password')}`}
              onChange={(e) => inputChangeHandler(e)}
              id="password"
              value={password}
              required
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={(e) => handleLogin(e, email, password)} variant="primary" type="submit" disabled={isEmailValid}>
          {t('button.sign_in')}
        </Button>
      </Modal.Footer>

    </Modal>
  );
}

export default LoginModal;
