// import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/About-us/AboutUs';
import Dogs from './components/Dogs/Dogs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from "./components/Register/Register"

function App() {
  return (
   <div className='app'>
      <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/dogs' Component={Dogs} />
          {/* <Route exact path='Donations' Component={} /> */}
          <Route exact path='/SobreNosotros' Component={AboutUs} />
          <Route exact path='/Login' Component={Login} />
          <Route exact path='Register' Component={Register}/>

        </Routes>
      <Footer />
   </div>
  );
}

export default App;
