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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            <li>
              First name and Last name:&nbsp;
              {currentUser.firstName}
              &nbsp;
              {currentUser.lastName}
            </li>
            <li>
              Location:&nbsp;
              {currentUser.location}
            </li>
            <li>
              Country:&nbsp;
              {currentUser.country}
            </li>
            <li>
              City:&nbsp;
              {currentUser.city}
            </li>
            <li>
              Like cats:&nbsp;
              {currentUser.likeCats === true ? 'yes' : 'no'}
            </li>
            <li>
              Like dogs:&nbsp;
              {currentUser.likeDogs === true ? 'yes' : 'no'}
            </li>
            <li>
              Favorite film:&nbsp;
              {currentUser.favoriteFilm}
            </li>
          </div>
        )
      }
    </div>
  );
}

export default UserInfo;
