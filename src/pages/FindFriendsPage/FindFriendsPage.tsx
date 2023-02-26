import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Container } from 'react-bootstrap';
import FindFriendsList from '../../components/FindFriendsList/FindFriendsList';
import FriendsFilter from '../../components/FriendsFilters/FriendsFilters';
import { IUser } from '../../components/types';
import { getAllUsers } from '../../utils/utils';
import './FindFriendsPage.scss';

export default function FindFriendsPage() {
  const { status, error, data: users } = useQuery<IUser[] | null>(['users'], () => getAllUsers());

  return (
    <Container className="find-friends-page p-0" fluid>
      <FriendsFilter />
      {status === 'success' && <FindFriendsList users={users!} />}
    </Container>
  );
}
