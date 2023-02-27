import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useAppSelector } from '../../hooks/redux';
import { getUserData, writeUserData } from '../../utils/utils';
import { IUser } from '../types';
import './style.scss';

function UpDateUserModal({ active, setActive }: any) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickName, setNickName] = useState('');
  const [avatarImg, setAvatarImg] = useState('');
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [likeCats, setLikeCats] = useState(false);
  const [likeDogs, setLikeDogs] = useState(true);
  const [favoriteFilm, setFavoriteFilm] = useState('');

  const { id } = useAppSelector((state) => state.userAuth);
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    status, error, data: user, refetch,
  } = useQuery<IUser | null>(['user', id], () => getUserData(id!));

  useEffect(() => {
    if (status === 'success' && user) {
      setFirstName(user.firstName ? user.firstName : '');
      setLastName(user.lastName ? user.lastName : '');
      setNickName(user.nickName ? user.nickName : '');
      setAvatarImg(user.avatarImg ? user.avatarImg : '');
      setLocation(user.location ? user.location : '');
      setCountry(user.country ? user.country : '');
      setCity(user.city ? user.city : '');
      setLikeCats(user.likeCats !== undefined ? user.likeCats : false);
      setLikeDogs(user.likeDogs !== undefined ? user.likeDogs : false);
      setFavoriteFilm(user.favoriteFilm ? user.favoriteFilm : '');
    }
  }, [user]);

  // const dispatch = useAppDispatch();

  const updateUser = async () => {
    setActive(false);
    if (user) {
      writeUserData({
        ...user,
        firstName,
        lastName,
        nickName,
        location,
        country,
        city,
        avatarImg,
        likeCats,
        likeDogs,
        favoriteFilm,
      });
      refetch();
    }
  };

  // const upDateUser = async () => {
  //   await dispatch(fetchUpDateUser(newUser));

  //   setActive(false);

  //   try {
  //     const response = await fetch(`${baseUrl}/1`, {
  //       method: 'GET',
  //     }).then((data) => data.json());
  //     dispatch(updateFirstUser(response));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div
      className={active ? 'modal active' : 'modal'}
    >
      <div className="register register-active">
        <Form>
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
            <Form.Check
              reverse
              inline
              label="Like cats"
              name="group1"
              type="checkbox"
              id="checkbox1"
              onChange={() => setLikeCats(!likeCats)}

            />

          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Check
              reverse
              inline
              label="Like dogs"
              name="group1"
              type="checkbox"
              id="checkbox2"
              onChange={() => setLikeDogs(!likeDogs)}
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
          <Button variant="primary" type="button" onClick={updateUser}>
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpDateUserModal;
