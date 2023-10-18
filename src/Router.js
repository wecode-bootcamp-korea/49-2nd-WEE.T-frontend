import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import LoginKakao from './pages/Login/LoginKakao';
import LoginNaver from './pages/Login/LoginNaver';
import Community from './pages/Community/Community';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/kakao" element={<LoginKakao />} />
        <Route path="/login/naver" element={<LoginNaver />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
