import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import User from '../../data/test-data/User';
import FindFriendsCard from '../FindFriendsCard/FindFriendsCard';

export default function FindFriendsList() {
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
    <Row xs={1} md={2} className="g-4">

      { users
        ? users.map((user: User) => (
          <Col key={user.id}>
            <FindFriendsCard user={user} />
          </Col>
        ))
        : ''}
    </Row>
  );
}
