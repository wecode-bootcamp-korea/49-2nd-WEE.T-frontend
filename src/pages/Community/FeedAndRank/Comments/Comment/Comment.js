import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Comment.scss';

const Comment = ({ feedId, fetchCommentList }) => {
  // const TOKEN = localStorage.getItem('accessToken');
  const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaXNOZXciOmZhbHNlLCJpYXQiOjE2OTc2OTgyMzgsImV4cCI6MTY5Nzc0MTQzOH0.lTEsMsiqQa8MQBmbeWPzDSlvzbDCc9HsX5eQ5-vhJxU';
  const navigate = useNavigate();

  const [comment, setComment] = useState('');
  const isCheckComment = comment.length >= 1;

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleCommentPost = () => {
    if (TOKEN) {
      if (isCheckComment) {
        fetch(`http://10.58.52.207:8000/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: TOKEN,
          },
          body: JSON.stringify({
            feedId: feedId.feedId,
            content: comment,
          }),
        }).then((response) => {
          console.log('>>>>', response);
          if (response.ok) {
            fetchCommentList();
          }
        });
      } else {
        alert('글을 작성해주세요.');
      }
    } else {
      alert('로그인 후 글 작성이 가능합니다.');
      navigate('/login');
    }
  };

  return (
    <form className="comment">
      <input
        className="commentInput"
        name="commentInput"
        type="text"
        maxLength="50"
        placeholder="댓글을 입력해주세요."
        onChange={handleComment}
      />
      <button
        className="commentWriteBtn"
        type="button"
        disabled={!isCheckComment}
        onClick={handleCommentPost}
      >
        댓글 등록
      </button>
    </form>
  );
};

export default Comment;
