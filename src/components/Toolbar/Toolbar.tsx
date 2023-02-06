import React from 'react';
import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import './style.scss';

function Toolbar(): JSX.Element {
  // const router = useNavigate();

  return (
    <div className="toolbar">
      <Button type="button" className="btn btn-outline-primary">Изменить информацию в профиле</Button>
      <Button type="button" className="btn btn-outline-primary">Создать пост</Button>
    </div>
  );
}

export default Toolbar;
