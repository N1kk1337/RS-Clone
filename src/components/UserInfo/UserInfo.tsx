import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import './style.scss';

function UserInfo(): JSX.Element {
  const { data: users, isLoading } = useAppSelector((state) => state.users);
  console.log(users[0]);
  return (
    isLoading
      ? <div>Loading users</div>
      : (
        <div className="user">
          <img className="avatar" src={users[0] && users[0].avatarImg} alt="avatar" />
          <li>
            First name and Last name:&nbsp;
            {users[0] && users[0].firstName}
            &nbsp;
            {users[0] && users[0].lastName}
          </li>
          <li>
            Location:&nbsp;
            {users[0] && users[0].location}
          </li>
          <li>
            Country:&nbsp;
            {users[0] && users[0].country}
          </li>
          <li>
            City:&nbsp;
            {users[0] && users[0].city}
          </li>
          <li>
            Like cats:&nbsp;
            {users[0] && users[0].likeCats === true ? 'yes' : 'no'}
          </li>
          <li>
            Like dogs:&nbsp;
            {users[0] && users[0].likeDogs === true ? 'yes' : 'no'}
          </li>
          <li>
            Favorite film:&nbsp;
            {users[0] && users[0].favoriteFilm}
          </li>
        </div>
      ));
}

export default UserInfo;
