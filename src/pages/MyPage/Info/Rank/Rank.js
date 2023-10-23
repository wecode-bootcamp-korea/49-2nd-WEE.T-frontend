import React from 'react';
import './Rank.scss';

const Rank = (props) => {
  const { data } = props;
  return (
    <div className="rank">
      <div className="userRank">
        <h1>나의 뱃지 등급</h1>
      </div>
      <div className="userBadge">
        <img className="badgeImg" src={data?.badgeImageUrl} alt="뱃지이미지" />
      </div>
    </div>
  );
};

export default Rank;
