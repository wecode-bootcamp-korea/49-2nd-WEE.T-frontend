import React from 'react';
import './Rank.scss';

const Rank = () => {
  return (
    <div className="rank">
      <div className="titleDiv">
        <img src="/images/logo.png" alt="로고이미지" className="logoImg" />
        <h4>Top 10</h4>
      </div>
      <div className="rankDiv">
        <ol className="rankList">
          <li>
            <div className="ranking">1등</div>
            <div className="userBadge">
              <img
                src="/images/dog.jpg"
                alt="챌린지뱃지"
                className="badgeImg"
              />
              <div className="userNickname">wecode</div>
            </div>
            <div className="userFeedCount">작성게시글 120개</div>
          </li>
          <li>
            <div className="ranking">2등</div>
            <div className="userBadge">
              <img
                src="/images/dog.jpg"
                alt="챌린지뱃지"
                className="badgeImg"
              />
              <div className="userNickname">candy</div>
            </div>
            <div className="userFeedCount">작성게시글 119개</div>
          </li>
          <li>
            <div className="ranking">3등</div>
            <div className="userBadge">
              <img
                src="/images/dog.jpg"
                alt="챌린지뱃지"
                className="badgeImg"
              />
              <div className="userNickname">joker</div>
            </div>
            <div className="userFeedCount">작성게시글 118개</div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Rank;
