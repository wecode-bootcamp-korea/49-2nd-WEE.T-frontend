import React from 'react';
import { GENDER } from '../../../../data/gender';
import './Profile.scss';

const getGenderKor = (genderEng) => {
  //'male', 'female'
  return GENDER[genderEng?.toUpperCase()]?.kor;
};
const Profile = (props) => {
  const { data } = props;

  return (
    <div className="Profile">
      <div className="userProfile">
        <img
          className="userImg"
          src="https://file.sportsseoul.com/news/cms/2023/09/19/news-p.v1.20230919.ceac473d21cc43bd92205006484893ff_P1.jpg"
          alt="프로필이미지"
        />
      </div>
      <div className="userInfo">
        <p>{`닉네임: ${data?.nickname}`}</p>
        <p>{`나이:  ${data?.age}`}</p>
        <p>{`성별:  ${getGenderKor(data?.gender)}`}</p>
      </div>
    </div>
  );
};

export default Profile;
