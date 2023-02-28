import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FindFriendsCard from '../FindFriendsCard/FindFriendsCard';
import Loading from '../Loading/Loading';
import { IUser } from '../types';
import cryingCat from '../../assets/crying_cat.png';

interface Props {
  users: IUser[]
}

export default function FindFriendsList({ users }: Props) {
  if (users.length === 0) {
    return (
      <Container className="find-friends_no-friends" fluid>
        <p>No matches 😿</p>
        <img src={cryingCat} alt="" />
      </Container>
    );
  }
  return (
    users.length === 0
      ? <Loading />
      : (
        <Container>
          <Row xs={1} md={2} className="g-4">
            {users
              ? users.map((user: IUser) => (
                <Col key={user.userId}>
                  <FindFriendsCard user={user} />
                </Col>
              ))
              : ''}

          </Row>
        </Container>
      )
  );
}
