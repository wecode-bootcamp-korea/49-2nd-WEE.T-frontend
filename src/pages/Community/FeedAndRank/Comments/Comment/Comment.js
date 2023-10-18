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
        'Content-Type': 'application/json',
        // authorization: accessToken,
      },
      body: JSON.stringify({
        feedId,
        content: comment,
      }),
    }).then((response) => {
      if (response.ok) {
        fetchCommentList();
      }
    });
  };
  return (
    <form className="comment">
      <input
        className="commentInput"
        name="commentInput"
        type="text"
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
