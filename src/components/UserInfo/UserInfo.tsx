import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../../hooks/redux';
import './style.scss';
import { getUserData } from '../../utils/utils';
import { IUser } from '../types';
import UpDateUserModal from '../UpDateUserModal/UpDateUserModal';
import Loading from '../Loading/Loading';

function UserInfo(): JSX.Element {
  const { id } = useAppSelector((state) => state.userAuth);
  const {
    status, error, data: currentUser, refetch,
  } = useQuery<IUser | null>(['user', id], () => getUserData(id!));
  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <div>
      <Button type="button" className="btn btn-outline-primary" onClick={() => setModalActive(!modalActive)}>Изменить информацию в профиле</Button>
      {modalActive
        && <UpDateUserModal active={modalActive} setActive={setModalActive} />}
      {
      !(currentUser && status === 'success')
        ? <Loading />
        : (
          <div className="user">
            <img className="avatar" src={currentUser.avatarImg} alt="avatar" />
            <div>
              First name and Last name:&nbsp;
              {currentUser.firstName}
              &nbsp;
              {currentUser.lastName}
            </div>
            <div>
              Location:&nbsp;
              {currentUser.location}
            </div>
            <div>
              Country:&nbsp;
              {currentUser.country}
            </div>
            <div>
              City:&nbsp;
              {currentUser.city}
            </div>
            <div>
            <mark>
              Like cats:
            </mark>
              {currentUser.likeCats === true ? 'yes' : 'no'}
            </div>
            <div>
            <mark>
              Like dogs:
            </mark>
              {currentUser.likeDogs === true ? 'yes' : 'no'}
            </div>
            <div>
              Favorite film:&nbsp;
              {currentUser.favoriteFilm}
            </div>
          </div>
        )
      }
    </div>
  );
}

export default UserInfo;
