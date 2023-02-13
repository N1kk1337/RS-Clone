import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import FindFriendsList from '../../components/FindFriendsList/FindFriendsList';
import FriendsFilter from '../../components/FriendsFilters/FriendsFilters';
import './FindFriends.scss';

export default function FindFriends() {
  const [users, setUsers] = useState([]);
  const USERS_URL = 'http://127.0.0.1:3004/users';
  const getUsers = async () => {
    const response = await fetch(USERS_URL);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Container className="find-friends-page p-0" fluid>
      <FriendsFilter />
      <FindFriendsList users={users} />
    </Container>
  );
}
