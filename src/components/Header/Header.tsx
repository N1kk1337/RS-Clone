import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';
import './style.scss';
import i18next from 'i18next';
import logo from '../../assets/logo.png';

import { useAppSelector } from '../../hooks/redux';

function Header(): JSX.Element {
  const router = useNavigate();
  const { id } = useAppSelector((state) => state.userAuth);
  const [t, i18n] = useTranslation();
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')) {
      if (localStorage.getItem('i18nextLng')!.length! > 2) {
        i18next.changeLanguage('en');
      }
    }
  }, []);

  return (
    <div className="header" data-testid="header">
      <button type="button" onClick={() => router('')}>

        <img
          src={logo}
          alt="logo"
        />
      </button>
      <div className="navbar">
        { id !== null && <Button className="nav-btn" onClick={() => router('/user-page')}>{t('button.my_page')}</Button>}
        { id !== null && <Button className="nav-btn" onClick={() => router('/friends')}>{t('button.friends_list')}</Button>}
        { id !== null && <Button className="nav-btn" onClick={() => router('/search')}>{t('button.find_friends')}</Button>}
        { id !== null && <Button className="nav-btn" onClick={() => router('/feed')}>{t('button.news')}</Button>}
        { id !== null && <Button className="nav-btn" onClick={() => router('/globalchat')}>{t('button.global_chat')}</Button>}
        <Form.Select
          className="navbar-select"
          value={localStorage.getItem('i18nextLng') || 'Русский'}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </Form.Select>
      </div>
    </div>
  );
}

export default Header;
