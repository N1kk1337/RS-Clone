import React, { useEffect } from 'react';
import {
  Navigate,
  Route, Routes,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/Landing/LandingPage';
import UserPage from './pages/UserPage/UserPage';
import './App.scss';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export const emptyPath = '/';
export const userPage = '/user-page';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="content">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path={emptyPath} element={<LandingPage />} />
          <Route path={userPage} element={<UserPage />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
