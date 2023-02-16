import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import UserInfo from '../../components/UserInfo/UserInfo';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import User from '../../data/test-data/User';
import './style.scss';

function UserPage() {
  async function getUser() {
    const response = await fetch('http://127.0.0.1:3004/users/1');
    const data = await response.json();

    return data;
  }

  return (
    <div>
      <Toolbar />
      <UserInfo />
    </div>
  );
}

export default UserPage;
