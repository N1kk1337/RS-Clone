import React from 'react';
import './style.scss';
import rsslogo from '../../assets/rs_school_js.svg';
import { useTranslation } from 'react-i18next';

function Footer(): JSX.Element {
  const [t] = useTranslation();
  return (
    <div className="footer" data-testid="footer">
      <div className="github">
        {t('info.site-by')}
        <a href="https://github.com/n1kk1337">{t('info.nikita')}</a>
        <a href="https://github.com/baxromxoja16">{t('info.baxrom')}</a>
        <a href="https://github.com/KarinaBertosh">{t('info.karina')}</a>
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
