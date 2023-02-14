/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicExample from '../../components/RegisterModal/RegisterModal';
import './Landing.scss';

function LandingPage() {
  const [showRegister, setShowRegister] = useState(false);
  const router = useNavigate();

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
            <div className="index-form col-lg-3 col-md-12">
              <form className="row row-cols-lg-5 g-3 align-items-center">
                <h3 className="col-12">Sign in</h3>
                <div className="col-12">
                  <div className="input-group">
                    <span className="visually-hidden">Username</span>
                    <div className="input-group-text">@</div>
                    <input
                      type="email"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Username"
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineFormCheck"
                    />
                    <span className="form-check-label">Remember me</span>
                  </div>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary col-12 mb-5"
                    onClick={() => router('/user-page')}
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
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
