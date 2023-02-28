import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../hooks/redux';
import { getUserData, writeUserData } from '../../utils/utils';
import { IUser } from '../types';
import './style.scss';

function UpDateUserModal({ setActive }: any) {
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

  const [t] = useTranslation();

  const { id } = useAppSelector((state) => state.userAuth);
  const {
    status, data: user, refetch,
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

  return (
    <div>
      <div id="update-modal" className="register register-active">
        <Form>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">{t('validation.first-name')}</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              id="firstName"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">{t('validation.last-name')}</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              id="lastName"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">{t('validation.location')}</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              id="location"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">{t('validation.country')}</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              id="country"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">{t('validation.city')}</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              id="city"
            />
          </Form.Group>
          <InputGroup>
            <Form.Check
              reverse
              inline
              label={`${t('validation.cat')}`}
              name="group1"
              type="checkbox"
              id="checkbox1"
              onChange={() => setLikeCats(!likeCats)}

            />

          </InputGroup>
          <Form.Group>
            <Form.Check
              reverse
              inline
              label={`${t('validation.dog')}`}
              name="group1"
              type="checkbox"
              id="checkbox2"
              onChange={() => setLikeDogs(!likeDogs)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Label className="fs-4">{t('validation.film')}</Form.Label>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={favoriteFilm}
              onChange={(event) => setFavoriteFilm(event.target.value)}
              id="favoriteFilm"
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={updateUser}>
            {t('button.update')}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpDateUserModal;
