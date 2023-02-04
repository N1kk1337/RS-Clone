import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './style.scss';

function Header(): JSX.Element {
  const router = useNavigate();

  return (
    <div className="header">
      <Button type="button" className="btn btn-outline-primary" onClick={() => router('')}>
        <img
          src="/rs-clone/logo.png"
          alt="logo"
        />
      </Button>

    </div>
  );
}

export default Header;
