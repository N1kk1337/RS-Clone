import React from 'react';
// import { Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import data from '../../data/test-data/test-data.json';
import './style.scss';

function User(): JSX.Element {
  // const router = useNavigate();

  return (
    <div className="user">
      <img className="avatar" src={data.products[0].avatarImg} alt="avatar" />
      <li>
        First name and Last name:&nbsp;
        {data.products[0].firstName}
        &nbsp;
        {data.products[0].lastName}
      </li>
      <li>
        Location:&nbsp;
        {data.products[0].location}
      </li>
      <li>
        Country:&nbsp;
        {data.products[0].country}
      </li>
      <li>
        City:&nbsp;
        {data.products[0].city}
      </li>
      <li>
        Like cats:&nbsp;
        {data.products[0].likeCats}
      </li>
      <li>
        Like dogs:&nbsp;
        {data.products[0].likeDogs}
      </li>
    </div>
  );
}

export default User;
