import React from 'react';
import './style.scss';

function Footer(): JSX.Element {
  return (
    <div className="footer" data-testid="footer">
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
