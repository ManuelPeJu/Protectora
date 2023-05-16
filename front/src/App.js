// import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
   <div>
    <Routes>
      <Route exact path='/home' Component={Home}></Route>
    </Routes>
   </div>
  );
}

export default App;
