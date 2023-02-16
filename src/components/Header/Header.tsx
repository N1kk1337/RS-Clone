import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './style.scss';

function Header(): JSX.Element {
  const router = useNavigate();
  // добавить в кнопки правильный путь
  return (
    <div className="header">
      <Button type="button" className="btn btn-outline-primary" onClick={() => router('')}>
        <img
          src="/rs-clone/logo.png"
          alt="logo"
        />
      </Button>
      <div className="navbar">
        <Button onClick={() => router('')}>Мой профиль</Button>
        <Button onClick={() => router('')}>Найти друзей</Button>
        <Button onClick={() => router('')}>Открыть ленту постов</Button>
      </div>

    </div>
  );
}

export default Header;
