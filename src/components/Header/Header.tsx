import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import lending from '../../assets/lending.png';

function Header(): JSX.Element {
  const router = useNavigate();
  return (
    <div className="header" data-testid="header">
      <button type="button" onClick={() => router('')}>

        <img
          src={lending}
          alt="logo"
        />
      </button>
      <div className="navbar">
        <Button onClick={() => router('/user-page')}>Мой профиль</Button>
        <Button onClick={() => router('/search')}>Найти друзей</Button>
        <Button onClick={() => router('')}>Открыть ленту постов</Button>
        <Button onClick={() => router('/globalchat')}>Открыть ГЛ Чат</Button>
      </div>

    </div>
  );
}

export default Header;
