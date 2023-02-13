import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './FriendsFilters.scss';

export default function FriendsFilter() {
  return (
    <div className="find-friends-filter container">
      <Form className="filter-form">
        <Form.Group className="mb-3" controlId="formCity">
          <Form.Control type="text" placeholder="Name" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formCity">
          <Form.Control type="text" placeholder="Surname" />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formCity">
          <Form.Control type="text" placeholder="City" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCity">
          <Form.Check type="checkbox" label="Cats?" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formCity">
          <Form.Check type="checkbox" label="Dogs?" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCity">
          <Form.Control type="text" placeholder="Films" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Find
        </Button>
      </Form>
    </div>
  );
}
