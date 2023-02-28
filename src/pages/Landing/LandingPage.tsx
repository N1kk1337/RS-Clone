/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../../components/LoginModal/LoginModal';
import RegisterModal from '../../components/RegisterModal/RegisterModal';
import landing from '../../assets/landing.png';
import './Landing.scss';
import { useAppSelector } from '../../hooks/redux';
import { userPageLink } from '../../utils/routes';

function LandingPage() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [t] = useTranslation();
  const { id } = useAppSelector((state) => state.userAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== null) {
      navigate(userPageLink);
    }
  });

  return (
    <main>
      {showRegister ? (
        <div>
          <div className="overlay" onClick={() => setShowRegister(false)} />
          <RegisterModal />
        </div>
      ) : (
        ''
      )}
      {showLogin ? (
        <div>
          <div className="overlay" onClick={() => setShowLogin(false)} />
          <LoginModal />
        </div>
      ) : (
        ''
      )}

      <div className="landing-page">
        <h2 className="main-title">{t('project-name')}</h2>

        <p className="main-info">
          {t('description-project')}
        </p>

        <div className="landing-btn-container">
          <Button
            type="submit"
            className="landing-btn btn-primary"
            onClick={() => setShowLogin(true)}
          >
            {t('button.sign_in')}
          </Button>
          <Button
            type="button"
            className="landing-btn btn-success"
            onClick={() => setShowRegister(true)}
          >
            {t('button.sign_up')}
          </Button>
        </div>
        <img
          className="lending-img"
          src={landing}
          alt=""
        />

      </div>

    </main>
  );
}

export default LandingPage;
