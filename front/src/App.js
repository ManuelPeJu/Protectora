// import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Dogs from './components/Dogs/Dogs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <div>
      <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/dogs' Component={Dogs} />
        </Routes>
      <Footer />
   </div>
  );
}

export default App;
