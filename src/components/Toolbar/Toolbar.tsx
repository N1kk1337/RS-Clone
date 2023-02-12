import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import UpDateUserModal from '../UpDateUserModal/UpDateUserModal';
import './style.scss';

function Toolbar(): JSX.Element {
  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <div className="toolbar">
      <Button type="button" className="btn btn-outline-primary" onClick={() => setModalActive(!modalActive)}>Изменить информацию в профиле</Button>
      <Button type="button" className="btn btn-outline-primary">Создать пост</Button>
      {modalActive
        && <UpDateUserModal active={modalActive} setActive={() => setModalActive} />}
    </div>
  );
}

export default Toolbar;
