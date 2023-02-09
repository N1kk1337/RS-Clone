import React from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addUser } from '../store/slices/users';
import './style.scss';

function User(): JSX.Element {
  const { data: users, isLoading } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  console.log(users);
  return (
    isLoading
      ? <div>Loading users</div>
      : (
        <div className="user">
          <Button onClick={() => dispatch(addUser(users[0]))}>add user</Button>
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
            {users[0] && users[0].likeCats}
          </li>
          <li>
            Like dogs:&nbsp;
            {users[0] && users[0].likeDogs}
          </li>
        </div>
      ));
}

export default User;
