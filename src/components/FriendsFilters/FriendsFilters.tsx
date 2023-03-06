/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../hooks/redux';
import { setFilterParams } from '../store/slices/filterParams';
import './FriendsFilters.scss';

export default function FriendsFilter() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [likeCats, setLikeCats] = useState(true);
  const [likeDogs, setLikeDogs] = useState(true);
  const [favoriteFilm, setFavoriteFilm] = useState('');

  const [t] = useTranslation();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(setFilterParams({
      cats: likeCats,
      dogs: likeDogs,
      firstName,
      lastName,
      favoriteFilm,
      city,
    }));
  };

  return (
    <div className="find-friends-filter container">
      <Form className="filter-form" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Control
            type="text"
            placeholder={`${t('validation.first-name')}`}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Control
            type="text"
            placeholder={`${t('validation.last-name')}`}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCity">
          <Form.Control
            type="text"
            placeholder={`${t('validation.city')}`}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCats">
          <Form.Check
            type="checkbox"
            label={`${t('validation.cat')}?`}
            checked={likeCats}
            onChange={(e) => setLikeCats(e.target.checked)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDogs">
          <Form.Check
            type="checkbox"
            label={`${t('validation.dog')}?`}
            checked={likeDogs}
            onChange={(e) => setLikeDogs(e.target.checked)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFilms">
          <Form.Control
            type="text"
            placeholder={`${t('validation.film')}`}
            value={favoriteFilm}
            onChange={(e) => setFavoriteFilm(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {t('button.find')}
        </Button>
      </Form>
    </div>
  );
}
