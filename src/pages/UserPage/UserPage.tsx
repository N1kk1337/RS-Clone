import React, { useEffect, useState } from 'react';
import UserInfo from '../../components/UserInfo/UserInfo';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import './style.scss';
import { useQuery } from '@tanstack/react-query';
import { getUserData } from '../../utils/utils';
import { useAppSelector } from '../../hooks/redux';
import { IUser } from '../../components/types';

function UserPage() {
  const { id } = useAppSelector((state) => state.userAuth);
  const [isLoading, setIsLoading] = useState(true);

  const { status, error, data: user } = useQuery<IUser | null>(['user', id], () => getUserData(id!));

  useEffect(() => {
    if (status === 'success') setIsLoading(false);
  }, [status]);

  return (
    <div>
      <UserInfo userInfo={user!} />
      { !isLoading && <NewsFeed users={[user!]} /> }
    </div>
  );
}

export default UserPage;
