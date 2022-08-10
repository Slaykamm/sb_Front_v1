import cl from './App.module.css'

import {  } from 'react-router-dom';
import AppRouter from './AppRouter';

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
