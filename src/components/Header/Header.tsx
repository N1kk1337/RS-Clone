import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import logo from '../../assets/logo.png';
import { useAppSelector } from '../../hooks/redux';

function Header(): JSX.Element {
  const router = useNavigate();
  const { id } = useAppSelector((state) => state.userAuth);

  return (
    <div className="header" data-testid="header">
      <Button type="button" className="btn btn-outline-primary" onClick={() => router('')}>

        <img
          src={logo}
          alt="logo"
        />
      </Button>
      <div className="navbar">
        { id !== null && <Button onClick={() => router('/user-page')}>Мой профиль</Button>}
        { id !== null && <Button onClick={() => router('/friends')}>Список друзей</Button>}
        { id !== null && <Button onClick={() => router('/search')}>Найти друзей</Button>}
        { id !== null && <Button onClick={() => router('/feed')}>Открыть ленту постов</Button>}
        { id !== null && <Button onClick={() => router('/globalchat')}>Открыть ГЛ Чат</Button>}
      </div>

    </div>
  );
}

export default Header;
