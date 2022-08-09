import React from 'react';
import Header from './components/header/Header';
import MainPage from './Pages/mainpage/MainPage';
import cl from './App.module.css'
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className={cl.background}>
        <Header/>
        <MainPage/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
