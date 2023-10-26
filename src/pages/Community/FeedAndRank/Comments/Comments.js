import React from 'react';
import Comment from './Comment/Comment';
import CommentList from './CommentList/CommentList';
import './Comments.scss';

const Comments = ({ commentData, feedId, getCommentList }) => {
  const TOKEN = localStorage.getItem('accessToken');

  return (
    <section className="comments">
      <div className="commentDiv">
        {TOKEN && <Comment feedId={feedId} getCommentList={getCommentList} />}
        <CommentList
          getCommentList={getCommentList}
          commentData={commentData}
        />
      </div>
    </section>
  );
};

export default Comments;
