import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../hooks/redux';
import { addFriend, deleteFriend, getUserData } from '../../utils/utils';
import Loading from '../Loading/Loading';
import { IUser } from '../types';
import './FindFriendsCard.scss';
import placeholderAvatar from '../../assets/user.png';

interface Props {
  user: IUser;
}

export default function FindFriendsCard({ user }: Props) {
  const [t] = useTranslation();
  const {
    firstName, lastName, nickName, city, country, avatarImg,
  } = user;

  const { id } = useAppSelector((state) => state.userAuth);

  const {
    status, data: currentUser, refetch,
  } = useQuery<IUser | null>(['user', id], () => getUserData(id!));

  const onAddClick = () => {
    addFriend(id!, user.userId);
    refetch();
  };
  const onDeleteClick = () => {
    deleteFriend(id!, user.userId);
    refetch();
  };

  // todo переход в личный чат
  const onStartChatClick = () => { };

  return (
    status !== 'success'
      ? <Loading />
      : (
        <Card className="mt-3 mb-3 mx-auto user-search-card">
          <Card.Img className="search-card-img" variant="top" src={avatarImg === '' ? placeholderAvatar : avatarImg} />
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
              {currentUser?.friends?.includes(user.userId)
                ? <Button variant="warning" onClick={() => onDeleteClick()}>{t('button.delete_friend')}</Button>
                : <Button variant="success" onClick={() => onAddClick()}>{t('button.add_friend')}</Button>}
              <Button variant="primary" onClick={() => onStartChatClick()}>{t('button.start_chat')}</Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      )
  );
}
