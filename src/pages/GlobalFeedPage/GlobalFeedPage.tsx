import { useQuery } from '@tanstack/react-query';
import React from 'react';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import { IUser } from '../../components/types';
import { useAppSelector } from '../../hooks/redux';
import { getFriends } from '../../utils/utils';
import './GlobalFeedPage.scss';

function GlobalFeedPage() {
  const { id } = useAppSelector((state) => state.userAuth);
  const { status, error, data: friends } = useQuery<IUser[] | null>(['user', id], () => getFriends(id!));

  return (
    <div>
      {status === 'success'
        && <NewsFeed isMyPage isGlobal users={friends!} />}
    </div>
  );
}

export default GlobalFeedPage;
