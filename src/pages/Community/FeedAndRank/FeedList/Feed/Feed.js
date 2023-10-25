import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeedImages from '../FeedImages/FeedImages';
import Comments from '../../Comments/Comments';
import { LOGIN_AWS_API } from '../../../../../config';
import './Feed.scss';

const Feed = ({ getFeed, data }) => {
  const navigate = useNavigate();
  const [isCommentExtended, setIsCommentExtended] = useState(false);

  const TOKEN = localStorage.getItem('accessToken');

  const formatCreatedAt = (created_at) => {
    const formattedDate = new Date(created_at).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  };

  const handleEditFeed = (id) => {
    navigate(`/post-edit/${id}`);
  };

  const handleDeleteFeed = (id) => {
    fetch(`${LOGIN_AWS_API}/feeds/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;',
        Authorization: TOKEN,
      },
    }).then((response) => {
      if (response.ok) {
        getFeed();
        alert('게시물이 삭제되었습니다.');
      }
    });
  };

  const { id, badge, userNickname, isMyPost, content, comment, created_at } =
    data;

  return (
    <li key={id} className="feedTable">
      <div className="feedContent">
        <div className="userDiv">
          <div className="userInfo">
            <div className="badge">
              <img src={badge} alt="배지" />
            </div>
            <div className="nickname">{userNickname}</div>
          </div>
          {TOKEN && isMyPost ? (
            <div className="btnBox">
              <button
                type="button"
                className="changeBtn subBtn"
                onClick={() => handleEditFeed(id)}
              >
                수정
              </button>
              <button
                type="button"
                className="deleteBtn subBtn"
                onClick={() => handleDeleteFeed(id)}
              >
                삭제
              </button>
            </div>
          ) : null}
        </div>
        <FeedImages feed={data} />
        <div className="feedText">
          <div className="text">{content}</div>
          <div className="commentDiv">
            <div className="commentThings">댓글 {comment}개</div>
            <div
              className="moreView"
              onClick={() => setIsCommentExtended(!isCommentExtended)}
            >
              {isCommentExtended ? '댓글 접기 ▲' : '댓글 더보기 ▼'}
            </div>
            {isCommentExtended && <Comments feedId={id} />}
          </div>
          <div className="writeDate">{formatCreatedAt(created_at)}</div>
        </div>
      </div>
    </li>
  );
};

export default Feed;
