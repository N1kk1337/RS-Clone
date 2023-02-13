import React from 'react';
import { Button, Card } from 'react-bootstrap';

import User from '../../data/test-data/User';

interface Props {

  user: User;
}

export default function FindFriendsCard({ user }:Props) {
  const {
    firstName, lastName, nickName, city, country, avatarImg,
  } = user;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={avatarImg} />
      <Card.Body>
        <Card.Title>
          {firstName}
          {' '}
          {nickName}
          {' '}
          {lastName}
        </Card.Title>
        <Card.Text>
          {country}
          {' '}
          {city}

        </Card.Text>
        <Button variant="primary">Add Friend</Button>
      </Card.Body>
    </Card>
  );
}
