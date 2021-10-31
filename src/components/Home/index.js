import React from 'react';
import MainContent from '../Content';
import Footer from '../Footer';
import Header from '../Header';
import './home.css';


const Home = () => {
  return (
    <div className="home">
      <Header />
      <MainContent />
      <Footer value="https://github.com/johnkatua/JohnKatua.com" />
    </div>
  );
}

export default Home;
