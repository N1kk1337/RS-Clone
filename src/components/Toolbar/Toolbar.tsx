import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import UpDateUserModal from '../UpDateUserModal/UpDateUserModal';
import './style.scss';

function Toolbar(): JSX.Element {
  const [t] = useTranslation();
  const [modalActive, setModalActive] = useState<boolean>(false);
  return (
    <div className="toolbar" data-testid="toolbar">
      <Button type="button" className="btn btn-outline-primary" onClick={() => setModalActive(!modalActive)}>{t('button.update-info')}</Button>
      {modalActive
        && <UpDateUserModal active={modalActive} setActive={setModalActive} />}
    </div>
  );
}

export default Toolbar;
