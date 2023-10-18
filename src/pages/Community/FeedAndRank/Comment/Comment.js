import React from 'react';
import './Comment.scss';

const Comment = () => {
  return (
    <section className="comment">
      <div className="commentDiv">
        <input
          className="commentInput"
          type="text"
          placeholder="댓글을 입력하세요"
        />
        <button className="commentWriteBtn" type="button">
          댓글 입력
        </button>
      </div>
    </section>
  );
};

export default Comment;
