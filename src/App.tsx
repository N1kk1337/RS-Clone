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
import { fetchUsersInfo } from './api/users';
import { useAppDispatch } from './hooks/redux';
import './App.scss';
import Chat from './components/Chat/Chat';
import GlobalChat from './components/GlobalChat/GlobalChat';

export const emptyPath = '/';
export const userPage = '/user-page';
export const chat = '/chat';
export const chatGlobal = '/globalchat';
const starPath = '*';

function App() {
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchUsersInfo());
  // }, []);

  return (
    <div className="App">
      <Header />
      <Container className="content">
        <Routes>
          <Route path={`${emptyPath}`} element={<LandingPage />} />
          <Route path={`${userPage}`} element={<UserPage />} />
          <Route path={`${starPath}`} element={<Navigate to="" />} />
          <Route path={`${chatGlobal}`} element={<GlobalChat />} />
          <Route path={`${chat}`} element={<Chat />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
