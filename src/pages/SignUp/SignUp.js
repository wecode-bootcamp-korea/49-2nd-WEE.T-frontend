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
  const [errors, setErrors] = useState({});

  const handleSignUp = () => {
    const accessToken = localStorage.getItem('newUser');
    fetch(`http://10.58.52.218:8000/auth/signup`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: accessToken,
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === 'MODIFIED_SUCCESS') {
          localStorage.setItem('accessToken', localStorage.getItem('newUser'));
          localStorage.removeItem('newUser');
          navigate('/');
        } else {
          alert('오류입니다. 관리자에게 문의하세요.');
        }
      });
  };

  const navigate = useNavigate();

  const saveJoinUserInfo = (event) => {
    const { name, value, type } = event.target;

    if (type === 'number') {
      event.target.value = value.replace(/[^0-9]/g, '');
    }
    setUserInfo({ ...userInfo, [name]: value });
    validateField(name, value);
  };
  const validateField = (fieldName, value) => {
    const fieldErrors = {};
    switch (fieldName) {
      case 'nickname':
        if (1 > value.length) {
          fieldErrors.nickname = '닉네임을 입력해 주세요.';
        } else if (value.length > 8) {
          fieldErrors.nickname = '닉네임은 8자 이내로 입력해 주세요.';
        } else {
          fieldErrors.nickname = '';
        }
        break;
      case 'age':
        if (1 > value) {
          fieldErrors.age = '만 나이를 입력해 주세요.';
        } else if (value > 120) {
          fieldErrors.age = '120이상은 입력할 수 없습니다.';
        } else if (value.length > 3) {
          fieldErrors.age = '나이는 세 자리까지 입력해 주세요.';
        } else {
          fieldErrors.age = '';
        }
        break;
      case 'height':
        if (1 > value) {
          fieldErrors.height = '키를 입력하세요.';
        } else if (value > 300) {
          fieldErrors.height = '300이하로 입력해 주세요.';
        } else {
          fieldErrors.height = '';
        }
        break;
      case 'seletalMuscleMass':
        if (1 > value) {
          fieldErrors.skeletalMuscleMass = '골격근량을 입력하세요.';
        } else if (value > 100)
          fieldErrors.skeletalMuscleMass =
            '골격근량은 100이하로 작성해 주세요.';
        else {
          fieldErrors.skeletalMuscleMass = '';
        }
        break;
      case 'goalWeight':
        if (1 > value) {
          fieldErrors.goalWeight = '목표 체중을 입력하세요.';
        } else if (value > 500)
          fieldErrors.goalWeight = '목표 체중은 500이하로 작성해 주세요.';
        else {
          fieldErrors.goalWeight = '';
        }
        break;
      case 'weight':
        if (1 > value) {
          fieldErrors.weight = '체중을 입력하세요';
        } else if (value > 500)
          fieldErrors.weight = '체중은 500이하로 작성해 주세요.';
        else {
          fieldErrors.weight = '';
        }
        break;
      case 'bodyFat':
        if (1 > value) {
          fieldErrors.bodyFat = '체지방량을 입력하세요.';
        } else if (value > 100)
          fieldErrors.bodyFat = '체지방률은 100이하로 작성해주세요.';
        else {
          fieldErrors.goalWeight = '';
        }
        break;
      default:
        break;
    }
    setErrors({ ...errors, ...fieldErrors });
  };
  return (
    <div className="SignUp flexCenter">
      <div className="signUpInner ">
        <div className="logo">
          <img src="/images/logo2.png" alt="위트 로고" />
        </div>
        <h1>건강 추가정보 입력</h1>
        <p>
          추가 정보를 입력하고 <b className="fontBold">위트만의 특별한 정보</b>
          를 받아보세요.
        </p>
        <div className="inputWrapper" onInput={(e) => saveJoinUserInfo(e)}>
          <label>닉네임</label>
          <div className="nickNameInput inputBox">
            <input
              className="nickName"
              type="text"
              placeholder="ex)홍길동이다"
              name="nickname"
            />
            <button>중복확인</button>
            {errors.nickname && <div className="errors">{errors.nickname}</div>}
          </div>
          <div className="genderAndageBox">
            <div className="ageInputWrapper inputBox">
              <span>만</span>
              <input
                className="age"
                type="number"
                name="age"
                placeholder="ex)29"
              />
              {errors.age && <div className="errors">{errors.age}</div>}
              <span>세</span>
            </div>
            <div className="genderCheck">
              <input
                className="male checkBoxInput"
                type="radio"
                name="gender"
                value={'male'}
              />
              <label>남</label>
              <input
                className="female checkBoxInput"
                type="radio"
                name="gender"
                value={'female'}
              />
              <label>여</label>
            </div>
          </div>
          <div className="inputBox">
            <label>몸무게 (kg)</label>
            <input
              className="weight"
              type="number"
              placeholder="ex)70"
              name="weight"
            />
            {errors.weight && <div className="errors">{errors.weight}</div>}
          </div>
          <div className="inputBox">
            <label>키 (cm)</label>
            <input
              className="height"
              type="number"
              placeholder="ex)180"
              name="height"
            />
            {errors.height && <div className="errors">{errors.height}</div>}
          </div>
          <div className="inputBox">
            <label>목표체중 (kg)</label>
            <input
              className="goalWeight"
              type="number"
              placeholder="ex)60"
              name="goalWeight"
            />
            {errors.goalWeight && (
              <div className="errors">{errors.goalWeight}</div>
            )}
          </div>
          <div className="inputBox">
            <label>체지방률 (%)</label>
            <input
              className="fatPercentage"
              type="number"
              placeholder="ex)18"
              name="bodyFat"
            />
            {errors.bodyFat && <div className="errors">{errors.bodyFat}</div>}
          </div>
          <div className="inputBox">
            <label>골격근량 (%)</label>
            <input
              className="skeletalMuscle"
              type="number"
              placeholder="ex)35"
              name="skeletalMuscleMass"
            />
            {errors.skeletalMuscleMass && (
              <div className="errors">{errors.skeletalMuscleMass}</div>
            )}
          </div>
        </div>
        <button className="btnSignUp" onClick={handleSignUp}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default SignUp;
