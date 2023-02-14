import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import User from '../../data/test-data/User';
import './FriendsFilters.scss';

export default function FriendsFilter() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [likeCats, setLikeCats] = useState(false);
  const [likeDogs, setLikeDogs] = useState(false);
  const [favoriteFilm, setFavoriteFilm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3004/users').then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFilteredUsers(
      users.filter((user) => {
        if (firstName && user.firstName !== firstName) {
          return false;
        }
        if (lastName && user.lastName !== lastName) {
          return false;
        }
        if (city && user.city !== city) {
          return false;
        }
        if (likeCats !== undefined && user.likeCats !== likeCats) {
          return false;
        }
        if (likeDogs !== undefined && user.likeDogs !== likeDogs) {
          return false;
        }
        if (favoriteFilm && user.favoriteFilm !== favoriteFilm) {
          return false;
        }

        return true;
      }),
    );
  };

  return (
    <div className="find-friends-filter container">
      <Form className="filter-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Control
            type="text"
            placeholder="Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Control
            type="text"
            placeholder="Surname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCity">
          <Form.Control
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCats">
          <Form.Check
            type="checkbox"
            label="Like cats?"
            checked={likeCats}
            onChange={(e) => setLikeCats(e.target.checked)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDogs">
          <Form.Check
            type="checkbox"
            label="Like dogs?"
            checked={likeDogs}
            onChange={(e) => setLikeDogs(e.target.checked)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFilms">
          <Form.Control
            type="text"
            placeholder="Films"
            value={favoriteFilm}
            onChange={(e) => setFavoriteFilm(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Find
        </Button>
      </Form>
    </div>
  );
}
