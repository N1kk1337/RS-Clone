import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

function Footer(): JSX.Element {
  return (
    <div className="footer">
      <Button type="button" className="btn btn-outline-primary">Перейти на главный сайт</Button>
      <div className="github">
        Site by:
        <a href="https://github.com/n1kk1337">Nikita</a>
        <a href="https://github.com/baxromxoja16">Baxrom</a>
        <a href="https://github.com/KarinaBertosh">Karina</a>
      </div>
    </div>
  );
}

export default Footer;
