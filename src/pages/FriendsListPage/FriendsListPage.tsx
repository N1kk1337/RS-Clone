import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import FindFriendsList from '../../components/FindFriendsList/FindFriendsList';
import Loading from '../../components/Loading/Loading';
import { IUser } from '../../components/types';
import { useAppSelector } from '../../hooks/redux';
import { findFriendsPageLink } from '../../utils/routes';
import { getAllUsers, getUserData } from '../../utils/utils';
import './FriendsListPage.scss';

function FriendsListPage() {
  const { id } = useAppSelector((state) => state.userAuth);
  const { status, data: users } = useQuery<IUser[] | null>(['users'], () => getAllUsers());
  const {
    status: currentUserStatus, data: currentUser,
  } = useQuery<IUser | null>(['user', id], () => getUserData(id!));

  const navigate = useNavigate();
  const [t] = useTranslation();

  if (currentUser?.friends?.length === 0) {
    return (
      <Container className="no-friends">
        <Card className="p-5 mx-auto no-friends__card">
          <h2 className="">{t('friend')}</h2>
          <Button onClick={() => navigate(findFriendsPageLink)}>{t('button.go_find')}</Button>
        </Card>
      </Container>
    );
  }

  return (
    (status === 'success' && currentUserStatus === 'success')
      ? (
        <FindFriendsList users={users?.filter(
          (user) => currentUser?.friends?.includes(user.userId),
        )!}
        />
      )
      : <Loading />

  );
}

export default FriendsListPage;
