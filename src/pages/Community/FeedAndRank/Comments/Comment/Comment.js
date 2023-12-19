import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { BASE_AWS_API } from '../../../../../config';
import './Comment.scss';

const Comment = ({ feedId, getCommentList }) => {
  const TOKEN = localStorage.getItem('accessToken');

  const navigate = useNavigate();
  const [comment, setComment] = useState('');

  const isCheckComment = comment.length >= 1;

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleCommentPost = (e) => {
    e.preventDefault();

    if (TOKEN) {
      if (isCheckComment) {
        fetch(`댓글저장엔드포인트`, {
          // fetch(`${BASE_AWS_API}/comments`, {
          // fetch(`http://localhost:8000/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: TOKEN,
          },
          body: JSON.stringify({
            feedId,
            content: comment,
          }),
        })
          .then((response) => {
            if (response.ok) {
              setComment('');
              getCommentList();
            }

            return response.json();
          })
          .then((result) => {
            if (result.message === 'COMMENT_ERROR') {
              alert('댓글은 50글자 미만으로 작성해 주세요!');
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
    <form className="comment" onSubmit={handleCommentPost}>
      <input
        className="commentInput"
        name="commentInput"
        type="text"
        maxLength="50"
        placeholder="댓글을 입력해주세요."
        onChange={handleComment}
        value={comment}
      />
      <button
        className="commentWriteBtn"
        type="submit"
        disabled={!isCheckComment}
      >
        댓글 등록
      </button>
    </form>
  );
};

export default Comment;
