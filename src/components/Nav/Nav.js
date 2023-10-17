import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();
  const isLogin = !!localStorage.getItem('token');

  const goToSubscribe = () => {
    if (!isLogin) {
      alert('로그인 후 이용 가능합니다.');
      return;
    } else {
      navigate('/subscribe');
    }
  };

  const goToCommunity = () => {
    navigate('/');
  };

  const goToGuideLine = () => {
    navigate('/');
  };

  const goToLocation = () => {
    navigate('/');
  };

  const goToCondition = () => {
    navigate('/');
  };

  const handleLogauto = () => {
    localStorage.removeItem('token');
    alert('로그아웃 완료');
    window.location.reload();
  };

  return (
    <nav className="nav">
      <div className="logo">
        <img src="images/Logo.png" alt="메인로고사진없음" />
      </div>
      <div className="logoTwo">
        <span onclick={goToSubscribe}>구독</span>
        <span onclick={goToCommunity}>커뮤니티</span>
        <span onclick={goToGuideLine}>운동법</span>
        <span onclick={goToLocation}>위치</span>
        <span onclick={goToCondition}>상태페이지</span>
        <img src="images/chatImage.png" alt="알림이미지" />
        {/* <img src="images/chatImage.png" alt="챌린지이미지" /> */}
        {isLogin ? (
          <span onClick={handleLogauto}>닉네임/로그아웃</span>
        ) : (
          <Link to="/">로그인/회원가입</Link>
        )}
      </div>
    </nav>
  );
};

export default Nav;
