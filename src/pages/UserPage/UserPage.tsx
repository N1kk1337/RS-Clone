import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import UserInfo from '../../components/UserInfo/UserInfo';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import './style.scss';
import { useAppSelector } from '../../hooks/redux';

function UserPage() {
  const { data: users, isLoading } = useAppSelector((state) => state.users);

  return (
    <div>
      <Toolbar />
      <UserInfo />
      <NewsFeed users={[users[1]]} />
    </div>
  );
}

export default UserPage;
