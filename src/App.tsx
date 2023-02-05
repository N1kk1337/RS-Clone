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

export const emptyPath = '/';
export const userPage = '/user-page';
const starPath = '*';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={`${emptyPath}`} element={<LandingPage />} />
        <Route path={`${userPage}`} element={<UserPage />} />
        <Route path={`${starPath}`} element={<Navigate to="" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
