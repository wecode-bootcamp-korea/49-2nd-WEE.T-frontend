import React from 'react';
import './Location.scss';
import KakaoMap from './KakaoMap/KakaoMap';

const Location = () => {
  return (
    <div className="location">
      <div className="locationContainer">
        <div className="mainTitle">
          <img className="logo" src="./images/logo2.png" alt="로고" />
          <h1 className="title">내주변 검색</h1>
        </div>

        <div className="mapContainer">
          <KakaoMap />
        </div>
      </div>
    </div>
  );
};

export default Location;
