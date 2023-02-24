import React from 'react';
import UserInfo from '../../components/UserInfo/UserInfo';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import './style.scss';
import { useAppSelector } from '../../hooks/redux';

function UserPage() {
  const { data: users, isLoading } = useAppSelector((state) => state.users);
  return (
    <div>
      <UserInfo />
      {!isLoading && <NewsFeed users={[users[0]]} />}
    </div>
  );
}

export default UserPage;
