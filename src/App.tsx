import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Footer from './components/Footer/Footer';
import FeedPost from './pages/FeedPost/FeedPost';

function App() {
  return (
    <div className="App">
      <Header />
      <FeedPost />
      <Footer />
    </div>
  );
}

export default App;
