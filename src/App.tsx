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

export const emptyPath = '/';
export const userPage = '/user-page';
export const findFriendsPage = '/search';
export const globalFeedPage = '/feed';
export const globalChat = '/globalchat';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="content">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path={emptyPath} element={<LandingPage />} />
          <Route path={findFriendsPage} element={<FindFriendsPage />} />
          <Route path={globalFeedPage} element={<GlobalFeedPage />} />
          <Route path={globalChat} element={<GlobalChat />} />
          <Route path={userPage} element={<UserPage />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
