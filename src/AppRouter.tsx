import React from 'react'
import { 
    Routes, 
    Route, 
    Navigate, 
    BrowserRouter as Router 
  } from 'react-router-dom';
import Backet from './Pages/basket/Backet';
import MainPage from './Pages/mainpage/MainPage';
import UserCabinet from './Pages/UserCabinet/UserCabinet';


export default function AppRouter() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Navigate replace to={'/main'}/>}/>
      <Route path={'/main'} element={<MainPage/>}/>
      <Route path={'/backet'} element={<Backet/>}/>
      <Route path={'/userCabinet'} element={<UserCabinet/>}/>
      
    </Routes>
  </Router>
  )
}
