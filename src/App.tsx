import React from 'react';
import Header from './components/header/Header';
import MainPage from './Pages/mainpage/MainPage';
import cl from './App.module.css'

function App() {
  return (
    <>
      <div className={cl.background}>
        <Header/>
        <MainPage/>
      </div>
    </>
  );
}

export default App;
