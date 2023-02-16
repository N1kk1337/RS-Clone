import React from 'react';
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
      {/* здесь будет инфо о юзере */}
      <NewsFeed users={[getUser() as User]} />
    </div>
  );
}

export default UserPage;
