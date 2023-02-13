import React from 'react';
import FindFriendsList from '../../components/FindFriendsList/FindFriendsList';
import FriendsFilter from '../../components/FriendsFilters/FriendsFilters';
import './FindFriends.scss';

export default function FindFriends() {
  return (
    <div className="find-friends-page">
      <FriendsFilter />
      <FindFriendsList />
    </div>
  );
}
