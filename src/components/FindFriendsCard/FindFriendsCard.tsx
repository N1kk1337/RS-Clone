import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useAppSelector } from '../../hooks/redux';
import { addFriend, deleteFriend, getUserData } from '../../utils/utils';
import Loading from '../Loading/Loading';
import { IUser } from '../types';
import './FindFriendsCard.scss';

interface Props {
  user: IUser;
}

export default function FindFriendsCard({ user }: Props) {
  const {
    firstName, lastName, nickName, city, country, avatarImg,
  } = user;
  const { id } = useAppSelector((state) => state.userAuth);
  const {
    status, error, data: currentUser, refetch,
  } = useQuery<IUser | null>(['user', id], () => getUserData(id!));
  const [loading, setLoading] = useState(true);
  const onAddClick = () => {
    addFriend(id!, user.userId);
    refetch();
  };
  const onDeleteClick = () => {
    deleteFriend(id!, user.userId);
    refetch();
  };
  const onStartChatClick = () => { };
  useEffect(() => {
    setLoading(false);
  }, [user]);

  return (
    loading
      ? <Loading />
      :
      <Card className="mt-3 mb-3 mx-auto user-search-card">
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
          <Card.Footer className="user-search-card__footer">
            {currentUser?.friends?.find(() => user.userId)
              ? <Button variant="warning" onClick={() => onDeleteClick()}>Delete Friend</Button>
              : <Button variant="success" onClick={() => onAddClick()}>Add Friend</Button>}
            <Button variant="primary" onClick={() => onStartChatClick()}>Start Chat</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
  );
}
