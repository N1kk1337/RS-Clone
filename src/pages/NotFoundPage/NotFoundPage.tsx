import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFoundPage.scss';

import catPic from '../../assets/cat.png';

function NotFoundPage() {
  return (
    <Container className="not-found-page">
      <h2>Тут пусто! А могли быть котики...</h2>
      <img src={catPic} alt="cat" />
    </Container>
  );
}

export default NotFoundPage;
