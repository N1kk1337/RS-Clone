import React from 'react';
import { Button } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../../components/UserInfo/UserInfo';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import './style.scss';
import { getUserData } from '../../utils/utils';
import { useAppSelector } from '../../hooks/redux';
import { IUser } from '../../components/types';
import Loading from '../../components/Loading/Loading';
import { useTranslation } from 'react-i18next';

function UserPage() {
  const [t] = useTranslation();
  const { id } = useAppSelector((state) => state.userAuth);
  const navigate = useNavigate();

  const { status, data: user } = useQuery<IUser | null>(['user', id], () => getUserData(id!));

  if (id === null) {
    return (
      <div>
        <h2>{t('error.user-page')}</h2>
        <Button onClick={() => navigate('/')}>{t('button.back')}</Button>
      </div>
    );
  }

  return (
    status !== 'success'
      ? <Loading />
      : (
        <div className="user-page">
          <UserInfo />
          {status === 'success' && user
              && <NewsFeed isMyPage isGlobal={false} users={[user!]} />}
        </div>
      )
  );
}

export default UserPage;
