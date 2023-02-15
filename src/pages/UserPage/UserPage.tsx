import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import UserInfo from '../../components/UserInfo/UserInfo';
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
