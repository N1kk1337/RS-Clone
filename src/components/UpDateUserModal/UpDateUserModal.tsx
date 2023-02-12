import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { fetchUpDateUser } from '../../api/users';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import './style.scss';

function UpDateUserModal(active: any, setActive: any) {
  const { data: users } = useAppSelector((state) => state.users);
  console.log(active, setActive);

  const [firstName, setFirstName] = useState(`${users[0].firstName}`);
  const [lastName, setLastName] = useState(`${users[0].lastName}`);
  const [location, setLocation] = useState(`${users[0].location}`);
  const [country, setCountry] = useState(`${users[0].country}`);
  const [city, setCity] = useState(`${users[0].city}`);
  const [likeCats, setLikeCats] = useState(`${users[0].likeCats}`);
  const [likeDogs, setLikeDogs] = useState(`${users[0].likeDogs}`);
  const [favoriteFilm, setFavoriteFilm] = useState(`${users[0].favoriteFilm}`);

  console.log(firstName, lastName, location, country, city, likeCats, likeDogs, favoriteFilm);

  const newUser = {
    userId: users[0].id,
    firstNameUser: firstName,
    lastNameUser: lastName,
    locationUser: location,
    countryUser: country,
    cityUser: city,
    likeCatsUser: likeCats,
    likeDogsUser: likeDogs,
    favoriteFilmUser: favoriteFilm,
  };

  const dispatch = useAppDispatch();
  const upDateUser = async () => {
    const aa = await dispatch(fetchUpDateUser(newUser));
    console.log(aa);
  };

  return (
    <div
      className={active ? 'modal active' : 'modal'}
    // onClick={() => setActive(!active)}
    // onKeyDown={() => { }}
    // role="button"
    // tabIndex={0}
    >
      <div className="register register-active">
        <Form onSubmit={() => upDateUser()}>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">First name</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              id="firstName"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">Last name</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder={lastName}
              onChange={(event) => setLastName(event.target.value)}
              id="lastName"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">Location</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder={location}
              onChange={(event) => setLocation(event.target.value)}
              id="location"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">Country</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder={country}
              onChange={(event) => setCountry(event.target.value)}
              id="country"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">City</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder={city}
              onChange={(event) => setCity(event.target.value)}
              id="city"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">Like cats</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder={likeCats}
              onChange={(event) => setLikeCats(event.target.value)}
              id="likeCats"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">Like dogs</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder={likeDogs}
              onChange={(event) => setLikeDogs(event.target.value)}
              id="likeDogs"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">Favorite film</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder={favoriteFilm}
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
