import React from 'react';
// import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import './style.scss';

function User(): JSX.Element {
  // const router = useNavigate();

  return (
    <div className="user">
      Информация обо мне:
      <li>Имя: Karina</li>
      <li>Описание: Учусь программированию в школе RS School</li>
      <li>Интересы: велоспорт, настольный теннис</li>
      <li>Возраст: 22</li>
      <li>Гео: Беларусь</li>
    </div>
  );
}

export default User;
