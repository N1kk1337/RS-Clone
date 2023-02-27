import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './style.scss';

function Header(): JSX.Element {
  const router = useNavigate();
  // добавить в кнопки правильный путь
  return (
    <div className="header" data-testid="header">
      <Button type="button" className="btn btn-outline-primary" onClick={() => router('')}>

        <img
          src="/rs-clone/logo.png"
          alt="logo"
        />
      </Button>
      <div className="navbar">
        <Button onClick={() => router('/user-page')}>Мой профиль</Button>
        <Button onClick={() => router('/search')}>Найти друзей</Button>
        <Button onClick={() => router('')}>Открыть ленту постов</Button>
        <Button onClick={() => router('globalchat')}>Открыть ГЛ Чат</Button>
      </div>

    </div>
  );
}

export default Header;
