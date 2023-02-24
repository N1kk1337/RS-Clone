import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import './style.scss';
import { getUserData } from '../../utils/utils';
import { IUser } from '../types';

function UserInfo(): JSX.Element {
  // todo главный вопрос, хранить ли всё это в редаксе или всё же каждый раз загружать с сервера.
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(true);
  // const { data: users, isLoading } = useAppSelector((state) => state.users);
  const { id } = useAppSelector((state) => state.userAuth);

  useEffect(() => {
    getUserData(id as unknown as string)?.then((value) => {
      setUser(value!);
    });
  }, []);
  useEffect(() => {
    setLoading(false);
  }, [user]);

  return (
    loading
      ? <div>Loading users</div>
      : (
        <div className="user">
          <img className="avatar" src={user && user.avatarImg} alt="avatar" />
          <li>
            First name and Last name:&nbsp;
            {user && user.firstName}
            &nbsp;
            {user && user.lastName}
          </li>
          <li>
            Location:&nbsp;
            {user && user.location}
          </li>
          <li>
            Country:&nbsp;
            {user && user.country}
          </li>
          <li>
            City:&nbsp;
            {user && user.city}
          </li>
          <li>
            Like cats:&nbsp;
            {user && user.likeCats === true ? 'yes' : 'no'}
          </li>
          <li>
            Like dogs:&nbsp;
            {user && user.likeDogs === true ? 'yes' : 'no'}
          </li>
          <li>
            Favorite film:&nbsp;
            {user && user.favoriteFilm}
          </li>
        </div>
      ));
}

export default UserInfo;
