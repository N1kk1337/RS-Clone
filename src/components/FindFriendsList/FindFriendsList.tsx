import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import User from '../../data/test-data/User';
import FindFriendsCard from '../FindFriendsCard/FindFriendsCard';

interface Props {
  users:User[]
}
export default function FindFriendsList({ users }:Props) {
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">

        { users
          ? users.map((user: User) => (
            <Col key={user.id}>
              <FindFriendsCard user={user} />
            </Col>
          ))
          : ''}

      </Row>
    </Container>
  );
}
