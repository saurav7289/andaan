import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import DonateForm from './pages/DonateForm';
import Hotels from './pages/Hotels';
import Donate from './pages/Donate';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/donate-now" element={<DonateForm />} />
          <Route path="/donate-card" element={<Hotels />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
