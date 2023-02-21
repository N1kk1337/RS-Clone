import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { fetchUpDateUser } from '../../api/users';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { updateFirstUser } from '../store/slices/users';
import { baseUrl, IUser } from '../types';
import './style.scss';

function UpDateUserModal({ active, setActive }: any) {
  const { data: users } = useAppSelector((state) => state.users);

  const [firstName, setFirstName] = useState(`${users[0].firstName}`);
  const [lastName, setLastName] = useState(`${users[0].lastName}`);
  const [location, setLocation] = useState(`${users[0].location}`);
  const [country, setCountry] = useState(`${users[0].country}`);
  const [city, setCity] = useState(`${users[0].city}`);
  const [likeCats, setLikeCats] = useState(`${users[0].likeCats}`);
  const [likeDogs, setLikeDogs] = useState(`${users[0].likeDogs}`);
  const [favoriteFilm, setFavoriteFilm] = useState(`${users[0].favoriteFilm}`);

  const newUser: IUser = {
    id: users[0].id,
    firstName,
    lastName,
    location,
    country,
    city,
    likeCats: true,
    likeDogs: true,
    favoriteFilm,
  };

  const dispatch = useAppDispatch();

  const upDateUser = async () => {
    await dispatch(fetchUpDateUser(newUser));

    setActive(false);

    try {
      const response = await fetch(`${baseUrl}/1`, {
        method: 'GET',
      }).then((data) => data.json());
      dispatch(updateFirstUser(response));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className={active ? 'modal active' : 'modal'}
    >
      <div className="register register-active">
        <Form onSubmit={() => upDateUser()}>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">First name</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              id="firstName"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">Last name</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              id="lastName"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">Location</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              id="location"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">Country</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              id="country"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">City</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              id="city"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">Like cats</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={likeCats}
              onChange={(event) => setLikeCats(event.target.value)}
              id="likeCats"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">Like dogs</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={likeDogs}
              onChange={(event) => setLikeDogs(event.target.value)}
              id="likeDogs"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">Favorite film</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={favoriteFilm}
              onChange={(event) => setFavoriteFilm(event.target.value)}
              id="favoriteFilm"
            />
          </InputGroup>
          <Button variant="primary" type="submit">
            Up Date
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpDateUserModal;
