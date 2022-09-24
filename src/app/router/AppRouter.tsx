import React from 'react'
import { 
    Routes, 
    Route, 
    Navigate, 
    BrowserRouter as Router 
  } from 'react-router-dom';
import { routeConfig } from '../../config/routeConfig/routeConfig';
import Backet from '../../Pages/basket/ui/Backet';
import { MainPage } from '../../Pages/mainpage';
import { UserCabinet } from '../../Pages/UserCabinet';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {Object.values(routeConfig).map(({element, path}) => (
          <Route
            key={path}
            path={path}
            element= {element}
          />
        ))}
      </Routes>
  </Router>
  )
}
