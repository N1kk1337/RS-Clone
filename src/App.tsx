import React from 'react';
import {
  Route, Routes,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/Landing/LandingPage';
import UserPage from './pages/UserPage/UserPage';
import './App.scss';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import GlobalFeedPage from './pages/GlobalFeedPage/GlobalFeedPage';
import FindFriendsPage from './pages/FindFriendsPage/FindFriendsPage';
import GlobalChat from './components/GlobalChat/GlobalChat';
import FriendsListPage from './pages/FriendsListPage/FriendsListPage';
import {
  emptyPathLink,
  findFriendsPageLink,
  friendsPageLink, globalChatLink, globalFeedPageLink, userPageLink,
} from './utils/routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="content">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path={emptyPathLink} element={<LandingPage />} />
          <Route path={friendsPageLink} element={<FriendsListPage />} />
          <Route path={findFriendsPageLink} element={<FindFriendsPage />} />
          <Route path={globalFeedPageLink} element={<GlobalFeedPage />} />
          <Route path={globalChatLink} element={<GlobalChat />} />
          <Route path={userPageLink} element={<UserPage />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
