import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import FindFriendsList from '../../components/FindFriendsList/FindFriendsList';
import FriendsFilter from '../../components/FriendsFilters/FriendsFilters';
import Loading from '../../components/Loading/Loading';
import { IUser } from '../../components/types';
import { useAppSelector } from '../../hooks/redux';
import { getAllUsers } from '../../utils/utils';
import './FindFriendsPage.scss';

export default function FindFriendsPage() {
  const { status, data: users } = useQuery<IUser[] | null>(['users'], () => getAllUsers());
  const {
    cats, dogs, firstName, lastName, favoriteFilm, city,
  } = useAppSelector((state) => state.filterParams);

  let filteredUsers: IUser[] = [];
  useEffect(() => {
    // console.log(status);
    // console.log(users);
    console.log({
      cats, dogs, firstName, lastName, favoriteFilm, city,
    });

    if (users) {
      filteredUsers = users?.filter((user) => user.likeCats === cats
    && user.likeDogs === dogs
    && (user.firstName === firstName || user.firstName === '')
    && (user.lastName === lastName || user.lastName === '')
    && (user.favoriteFilm === favoriteFilm || user.favoriteFilm === '')
    && (user.city === city || user.city === ''));
    }
    // console.log(filteredUsers);
  }, [status, cats, dogs, firstName, lastName, favoriteFilm, city]);

  return (
    status !== 'success'
      ? <Loading />
      : (
        <Container className="find-friends-page p-0" fluid>
          <FriendsFilter />
          {status === 'success' && <FindFriendsList users={filteredUsers} />}
        </Container>
      )
  );
}
