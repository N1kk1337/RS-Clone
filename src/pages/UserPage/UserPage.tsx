import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import UserInfo from '../../components/User/User';
import './style.scss';

function UserPage() {
  return (
    <div>
      <Toolbar />
      <UserInfo />
    </div>
  );
}

export default UserPage;
