import React from 'react';
import FeedList from './FeedList/FeedList';
import Rank from './Rank/Rank';
import './FeedAndRank.scss';

const FeedAndRank = ({
  feedList,
  totalCount,
  page,
  limit,
  setPaginationParams,
}) => {
  const TOKEN = localStorage.getItem('accessToken');

  return (
    <section className="feedAndRank">
      <div className="feedBox">
        <div className="btnDiv">
          {TOKEN ? (
            <button type="button" className="writeBtn">
              글쓰기
            </button>
          ) : null}
        </div>
        <div className="totalFeedCount">
          총 <strong>{totalCount}</strong>개의 게시글이 있습니다.
        </div>
        <FeedList
          feedList={feedList}
          totalCount={totalCount}
          page={page}
          limit={limit}
          setPaginationParams={setPaginationParams}
        />
      </div>
      <Rank />
    </section>
  );
};

export default FeedAndRank;
