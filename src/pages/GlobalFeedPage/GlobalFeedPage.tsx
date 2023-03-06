import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../components/Loading/Loading';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import { IUser } from '../../components/types';
import { useAppSelector } from '../../hooks/redux';
import { getAllUsers, getUserData } from '../../utils/utils';
import './GlobalFeedPage.scss';

function GlobalFeedPage() {
  const { id } = useAppSelector((state) => state.userAuth);

  const { status, data: users } = useQuery<IUser[] | null>(['users'], () => getAllUsers());
  const {
    status: currentUserStatus, data: currentUser,
  } = useQuery<IUser | null>(['user', id], () => getUserData(id!));

  if (!users) {
    return <Loading />;
  } return (
    (status === 'success' && currentUserStatus === 'success')
      ? (
        <NewsFeed
          isGlobal
          isMyPage
          users={[
            ...users.filter((user) => currentUser?.friends?.includes(user.userId)),
            currentUser!,
          ]}
        />
      )
      : <Loading />

  );
}

export default GlobalFeedPage;
