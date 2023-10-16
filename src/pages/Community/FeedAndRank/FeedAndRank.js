import React from 'react';
import FeedList from './FeedList/FeedList';
import Rank from './Rank/Rank';
import './FeedAndRank.scss';

const FeedAndRank = ({ feedList }) => {
  return (
    <section className="feedAndRank">
      <div className="feedBox">
        <div className="btnDiv">
          <button type="button" className="writeBtn">
            글쓰기
          </button>
        </div>
        <div className="totalFeedCount">
          총 <strong>{feedList.totalCount}</strong>개의 게시글이 있습니다.
        </div>
        <FeedList feedList={feedList} />
      </div>
      <Rank />
    </section>
  );
};

export default FeedAndRank;
