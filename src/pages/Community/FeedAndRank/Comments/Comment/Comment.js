import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { BASE_AWS_API } from '../../../../../config';
import './Comment.scss';

const Comment = ({ feedIdData, fetchCommentList }) => {
  // const TOKEN = localStorage.getItem('accessToken');
  const TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaXNOZXciOmZhbHNlLCJpYXQiOjE2OTgyMzM3MzQsImV4cCI6MTY5ODI3NjkzNH0.lvij2fsOB81hHvYItRF3A_O8j2xNT8g7FyNxqQgdGdg';
  const navigate = useNavigate();

  const [comment, setComment] = useState('');
  const isCheckComment = comment.length >= 1;

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleCommentPost = () => {
    if (TOKEN) {
      if (isCheckComment) {
        fetch(`http://localhost:8000/comments`, {
          // fetch(`${BASE_AWS_API}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: TOKEN,
          },
          body: JSON.stringify({
            feedId: feedIdData.feedId,
            content: comment,
          }),
        }).then((response) => {
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
