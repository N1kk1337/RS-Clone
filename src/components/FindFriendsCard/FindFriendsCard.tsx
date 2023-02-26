import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { IUser } from '../types';
import './FindFriendsCard.scss';

interface Props {
  user: IUser;
}

export default function FindFriendsCard({ user }:Props) {
  const {
    firstName, lastName, nickName, city, country, avatarImg,
  } = user;

  const onAddClick = () => {
    // eslint-disable-next-line no-alert
    alert(`${firstName} ${lastName} добавлен в друзья`);
  };

  return (
    <Card className="mt-3 mb-3 mx-auto" style={{ width: '16rem' }}>
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
          {' - '}
          {city}

        </Card.Text>
        <Button variant="primary" onClick={onAddClick}>Add Friend</Button>
      </Card.Body>
    </Card>
  );
}
