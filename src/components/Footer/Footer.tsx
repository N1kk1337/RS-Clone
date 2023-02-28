import React from 'react';
import './style.scss';
import rsslogo from '../../assets/rs_school_js.svg';

function Footer(): JSX.Element {
  return (
    <div className="footer" data-testid="footer">
      <div className="github">
        Site by:
        <a href="https://github.com/n1kk1337">Nikita</a>
        <a href="https://github.com/baxromxoja16">Baxrom</a>
        <a href="https://github.com/KarinaBertosh">Karina</a>
      </div>

      <div className="footer__logo-container">
        <a className="footer__rsslogo" href="https://rs.school/js/"><img src={rsslogo} alt="rss logo" /></a>
        🐾
        <p>2023</p>
      </div>
    </div>
  );
}

export default Footer;
