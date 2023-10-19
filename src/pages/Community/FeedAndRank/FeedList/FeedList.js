import React, { useState } from 'react';
import FeedImages from './FeedImages/FeedImages';
import Comments from '../Comments/Comments';
import './FeedList.scss';

const FeedList = ({ feedList }) => {
  const [moreBtn, setMoreBtn] = useState('댓글 더보기 ▼');
  const [isView, setIsView] = useState(false);

  const handleView = () => {
    if (moreBtn === '댓글 더보기 ▼') {
      setMoreBtn('댓글 접기 ▲');
      setIsView(true);
    } else {
      setMoreBtn('댓글 더보기 ▼');
      setIsView(false);
    }
  };

  const formatCreatedAt = (created_at) => {
    const formattedDate = new Date(created_at).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  };

  return (
    <ul className="feedList">
      {feedList.feeds?.map((feed) => (
        <li key={feed.id} className="feedTable">
          <div className="feedContent">
            <div className="userDiv">
              <div className="userInfo">
                <div className="badge">
                  <img src={feed.badge} alt="배지" />
                </div>
                <div className="nickname">{feed.userNickname}</div>
              </div>
              {feed.isMyPost ? (
                <div className="btnBox">
                  <button type="button" className="changeBtn subBtn">
                    수정
                  </button>
                  <button type="button" className="deleteBtn subBtn">
                    삭제
                  </button>
                </div>
              ) : null}
            </div>
            <FeedImages feed={feed} />
            <div className="feedText">
              <div className="text">{feed.content}</div>
              <div className="commentDiv">
                <div className="commentThings">댓글 1개</div>
                <div className="moreView" onClick={handleView}>
                  {moreBtn}
                </div>
                {isView ? <Comments feedId={feed.id} /> : null}
              </div>
              <div className="writeDate">
                {formatCreatedAt(feed.created_at)}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FeedList;
