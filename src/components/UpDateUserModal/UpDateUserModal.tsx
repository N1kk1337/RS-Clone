import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import {
  Button, Form, InputGroup, Modal,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../hooks/redux';
import { getUserData, writeUserData } from '../../utils/utils';
import { IUser } from '../types';
import './style.scss';

type Props = {
  show:boolean;
  onHide:()=>void;
};

// eslint-disable-next-line react/prop-types
function UpDateUserModal({ show, onHide }:Props) {
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
      onHide();
      refetch();
    }
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      id="update-modal"
      onHide={onHide}

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {t('button.edit_profile')}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text className="fs-5">
              {t('validation.first-name')}

            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              id="firstName"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text className="fs-5">{t('validation.last-name')}</InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              id="lastName"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text className="fs-5">{t('validation.location')}</InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              id="location"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text className="fs-5">{t('validation.country')}</InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              id="country"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text className="fs-5">{t('validation.city')}</InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              id="city"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              aria-label="Default"
              onChange={() => setLikeCats(!likeCats)}
            />
            <InputGroup.Text>{t('validation.cat')}</InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              aria-label="Default"
              onChange={() => setLikeDogs(!likeDogs)}
            />
            <InputGroup.Text>{t('validation.dog')}</InputGroup.Text>

          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text className="fs-4">{t('validation.film')}</InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={favoriteFilm}
              onChange={(event) => setFavoriteFilm(event.target.value)}
              id="favoriteFilm"
            />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="button" onClick={updateUser}>
          {t('button.update')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpDateUserModal;
