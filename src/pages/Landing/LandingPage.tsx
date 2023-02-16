/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import LoginModal from '../../components/LoginModal/LoginModal';
import BasicExample from '../../components/RegisterModal/RegisterModal';
import './Landing.scss';

function LandingPage() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <main>
      {showRegister ? (
        <div>
          <div className="overlay" onClick={() => setShowRegister(false)} />
          <BasicExample />
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
      <section className="content-page">
        <div className="container">
          <div className="row gap-4">
            <div className="index-page-content col-lg-6 col-md-12 text-center">
              <h2 className="main-title">VK for mobile devices</h2>
              <p className="main-info">
                Install our official mobile app and stay in touch with your
                friends anytime and anywhere.
              </p>
              <img
                src="https://sun7-9.userapi.com/GKUrK0PzHqPH_9lv1fx01p_LO6PjXjMMRxBGJw/VD3VpchXcC8.png"
                alt=""
              />
            </div>
            <div className="index-form col-lg-3 col-md-12 mt-5">
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary col-12 mb-5"
                  onClick={() => setShowLogin(true)}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  className="btn btn-success col-12"
                  onClick={() => setShowRegister(true)}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
