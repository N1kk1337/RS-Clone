import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../components/Loading/Loading';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import { IUser } from '../../components/types';
import { useAppSelector } from '../../hooks/redux';
import { getFriends } from '../../utils/utils';
import './GlobalFeedPage.scss';

function GlobalFeedPage() {
  const { id } = useAppSelector((state) => state.userAuth);
  const { status, data: friends } = useQuery<IUser[] | null>(['user', id], () => getFriends(id!));

  return (
    status !== 'success'
      ? <Loading />
      : (
        <div>
          {status === 'success'
          && <NewsFeed isMyPage isGlobal users={friends!} />}
        </div>
      )
  );
}

export default GlobalFeedPage;
