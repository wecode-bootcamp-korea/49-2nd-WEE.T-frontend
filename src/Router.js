import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import LoginKakao from './pages/Login/LoginKakao';
import LoginNaver from './pages/Login/LoginNaver';
import Exercise from './pages/Exercise/Exercise';
import SignUp from './pages/SignUp/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/kakao" element={<LoginKakao />} />
        <Route path="/login/naver" element={<LoginNaver />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
