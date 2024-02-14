import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Home from './components/Home';
import Plans from './components/Plans';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Landing from './components/Landing';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import DetailPlan from './components/DetailPlan';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in by verifying if the token exists in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <Router>
        {isLoggedIn && <Header />}
        {isLoggedIn && <Nav />}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Landing />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/menu" element={isLoggedIn ? <Menu /> : <Navigate to="/" />} />
          <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/" />} />
          <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/" />} />
          <Route path="/about" element={!isLoggedIn ? <About /> : <Navigate to="/" />} />
          <Route path="/signup" element={!isLoggedIn ? <Signup /> : <Navigate to="/" />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/detailplan" element={isLoggedIn ? <DetailPlan /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
