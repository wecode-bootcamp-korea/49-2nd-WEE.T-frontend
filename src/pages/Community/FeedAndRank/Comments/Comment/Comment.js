import React, { useState } from 'react';
import './Comment.scss';

const Comment = ({ feedId, fetchCommentList }) => {
  // const accessToken = localStorage.getItem('accessToken');

  const [comment, setComment] = useState('');

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleCommentPost = () => {
    fetch(`/endpoint/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // Authorization: accessToken,
      },
      body: JSON.stringify({
        feedId,
        content: comment,
      }),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          response.json();
        }
      })
      .then((data) => {
        console.log(data);
      });
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
        onClick={handleCommentPost}
      >
        댓글 등록
      </button>
    </form>
  );
};

export default Comment;
