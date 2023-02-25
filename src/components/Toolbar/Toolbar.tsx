import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import UpDateUserModal from '../UpDateUserModal/UpDateUserModal';
import './style.scss';

function Toolbar(): JSX.Element {
  const [modalActive, setModalActive] = useState<boolean>(false);
  return (
    <div className="toolbar" data-testid="toolbar">
      <Button type="button" className="btn btn-outline-primary" onClick={() => setModalActive(!modalActive)}>Изменить информацию в профиле</Button>
      {modalActive
        && <UpDateUserModal active={modalActive} setActive={setModalActive} />}
    </div>
  );
}

export default Toolbar;
