import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeedList from './FeedList/FeedList';
import Rank from './Rank/Rank';
import './FeedAndRank.scss';

const FeedAndRank = ({
  feedList,
  totalCount,
  page,
  limit,
  setPaginationParams,
  fetchFeedList,
}) => {
  const navigate = useNavigate();
  // const TOKEN = localStorage.getItem('accessToken');
  const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaXNOZXciOmZhbHNlLCJpYXQiOjE2OTgyMzM3MzQsImV4cCI6MTY5ODI3NjkzNH0.lvij2fsOB81hHvYItRF3A_O8j2xNT8g7FyNxqQgdGdg';

  const handleWriteFeed = () => {
    navigate('/post-add');
  };

  return (
    <section className="feedAndRank">
      <div className="feedBox">
        <div className="btnDiv">
          {TOKEN ? (
            <button
              type="button"
              className="writeBtn"
              onClick={handleWriteFeed}
            >
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
          fetchFeedList={fetchFeedList}
        />
      </div>
      <Rank />
    </section>
  );
};

export default FeedAndRank;
