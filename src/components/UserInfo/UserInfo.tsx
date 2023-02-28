/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Button, ListGroup } from 'react-bootstrap';
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
        && (
        <div>
          <div
            className="overlay"
            onKeyDown={() => setModalActive(!modalActive)}
            onClick={() => setModalActive(!modalActive)}
          />
          <UpDateUserModal setActive={setModalActive} />
        </div>
        )}
      {
      !(currentUser && status === 'success')
        ? <Loading />
        : (
          <ListGroup>
            <img className="avatar" src={currentUser.avatarImg === '' ? placeholderAvatar : currentUser.avatarImg} alt="avatar" />
            <ListGroup.Item variant="secondary">
              First name and Last name:&nbsp;
              {currentUser.firstName}
              &nbsp;
              {currentUser.lastName}
            </ListGroup.Item>
            <ListGroup.Item>
              Location:&nbsp;
              {currentUser.location}
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              Country:&nbsp;
              {currentUser.country}
            </ListGroup.Item>
            <ListGroup.Item>
              City:&nbsp;
              {currentUser.city}
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">

              Like cats:

              {currentUser.likeCats === true ? 'yes' : 'no'}
            </ListGroup.Item>
            <ListGroup.Item>

              Like dogs:

              {currentUser.likeDogs === true ? 'yes' : 'no'}

            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              Favorite film:&nbsp;
              {currentUser.favoriteFilm}
            </ListGroup.Item>
          </ListGroup>

        )
      }
    </div>
  );
}

export default UserInfo;
