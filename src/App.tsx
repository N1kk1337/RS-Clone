import React from 'react';
import {
  Navigate,
  Route, Routes,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './pages/Landing/LandingPage';
import UserPage from './pages/UserPage/UserPage';
import './App.css';
import FindFriends from './pages/FindFriends/FindFriends';

export const emptyPath = '/';
export const userPage = '/user-page';
export const findFriendsPage = '/find-friends';
const starPath = '*';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={`/${findFriendsPage}`} element={<FindFriends />} />
        <Route path={`/${emptyPath}`} element={<LandingPage />} />
        <Route path={`/${userPage}`} element={<UserPage />} />
        <Route path={`/${starPath}`} element={<Navigate to="" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
