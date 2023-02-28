import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import './style.scss';
import { getUserData } from '../../utils/utils';
import { IUser } from '../types';
import UpDateUserModal from '../UpDateUserModal/UpDateUserModal';
import Loading from '../Loading/Loading';
import placeholderAvatar from '../../assets/user.png';
import { removeUser } from '../store/slices/userAuth';

function UserInfo(): JSX.Element {
  const { id } = useAppSelector((state) => state.userAuth);
  const {
    status, data: currentUser,
  } = useQuery<IUser | null>(['user', id], () => getUserData(id!));
  const [modalActive, setModalActive] = useState<boolean>(false);

  const [t] = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleExit = () => {
    dispatch(removeUser());
    navigate('/');
  };

  return (
    <div>
      <div className="user-page__button-container">
        <Button type="button" className="btn btn-outline-primary" onClick={() => setModalActive(!modalActive)}>{t('button.edit_profile')}</Button>
        <Button variant="danger" onClick={() => handleExit()}>{t('button.exit')}</Button>
      </div>
      {modalActive
        && <UpDateUserModal active={modalActive} setActive={setModalActive} />}
      {
      !(currentUser && status === 'success')
        ? <Loading />
        : (
          <div className="user">
            <img className="avatar" src={currentUser.avatarImg === '' ? placeholderAvatar : currentUser.avatarImg} alt="avatar" />
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
