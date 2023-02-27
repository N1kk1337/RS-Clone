import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import { type } from 'os';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../../components/UserInfo/UserInfo';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import './style.scss';
import { getUserData } from '../../utils/utils';
import { useAppSelector } from '../../hooks/redux';
import { IUser } from '../../components/types';

function UserPage() {
  const { id } = useAppSelector((state) => state.userAuth);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const { status, error, data: user } = useQuery<IUser | null>(['user', id], () => getUserData(id!));

  useEffect(() => {
    setIsAuth(!id);
    if (status === 'success') setIsLoading(false);
  }, [status, user]);

  return (
    isAuth ? (
      <div>
        <h2>You need to log in to view this page</h2>
        <Button onClick={() => navigate('/')}>Back to main page</Button>
      </div>
    )
      : (
        <div>
          <UserInfo userInfo={user!} />
          {status === 'success'
          && <NewsFeed isMyPage isGlobal={false} users={[user!]} />}
        </div>
      )

  );
}

export default UserPage;
