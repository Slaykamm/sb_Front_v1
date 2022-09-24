import cl from './App.module.scss'

import {  } from 'react-router-dom';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <>
      <div className={cl.background}>
        <AppRouter/>
      </div>
    </>
  );
}

export default App;
