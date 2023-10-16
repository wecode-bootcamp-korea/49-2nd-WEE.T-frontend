import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    height: 0,
    weight: 0,
    seletalMuscleMass: 0,
    goalWeight: 0,
    bodyFat: 0,
    birthDate: '',
    gender: 'male',
    isSubscribe: '',
    badge: '',
  });

  const handleSignUp = () => {
    fetch(`http://10.58.52.184:8000/auth/signup`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const navigate = useNavigate();
  const saveJoinUserInfo = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="SignUp flexCenter">
      <div className="signUpInner ">
        <div className="logo">
          <img src="/images/logo2.png" alt="위트 로고" />
        </div>
        <h1>건강 추가정보 입력</h1>
        <p>추가 정보를 입력하고 위트만의 특별한 정보를 받아보세요.</p>
        <div className="inputWrapper">
          <label>닉네임</label>
          <div className="nickNameInput">
            <input
              className="nickName"
              type="text"
              placeholder="닉네임을 입력하세요."
              name="nickname"
              onChange={saveJoinUserInfo}
            />
            <button>중복확인</button>
          </div>
          <div className="genderAndageBox">
            <div className="ageInputWrapper">
              <span>만</span>
              <input
                className="age"
                type="number"
                name="age"
                onChange={saveJoinUserInfo}
                placeholder="ex)29"
              />
              <span>세</span>
            </div>
            <div className="genderCheck">
              <input
                className="male checkBoxInput"
                type="radio"
                name="gender"
                onChange={saveJoinUserInfo}
                value={'male'}
              />
              <label>남</label>
              <input
                className="female checkBoxInput"
                type="radio"
                name="gender"
                onChange={saveJoinUserInfo}
                value={'female'}
              />
              <label>여</label>
            </div>
          </div>
          <label>몸무게 (kg)</label>
          <input
            className="height"
            type="number"
            placeholder="몸무게를 입력하세요."
            name="weight"
            onChange={saveJoinUserInfo}
          />
          <label>키 (cm)</label>
          <input
            className="weight"
            type="number"
            placeholder="키를 입력하세요."
            name="height"
            onChange={saveJoinUserInfo}
          />
          <label>목표체중 (kg)</label>
          <input
            className="targetWeight"
            type="number"
            placeholder="목표체중을 입력하세요."
            name="goalWeight"
            onChange={saveJoinUserInfo}
          />
          <label>체지방률 (%)</label>
          <input
            className="fatPercentage"
            type="number"
            placeholder="체지방률을 입력하세요."
            name="bodyFat"
            onChange={saveJoinUserInfo}
          />
          <label>골격근량 (%)</label>
          <input
            className="skeletalMuscle"
            type="number"
            placeholder="골격근량을 입력하세요."
            name="skeletalMuscleMass"
            onChange={saveJoinUserInfo}
          />
        </div>
        <button className="btnSignUp" onClick={handleSignUp}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignUp;
