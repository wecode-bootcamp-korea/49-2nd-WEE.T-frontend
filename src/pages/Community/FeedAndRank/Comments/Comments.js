import React from 'react';
import Comment from './Comment/Comment';
import CommentList from './CommentList/CommentList';
import './Comments.scss';

const Comments = ({ commentData, feedId, getCommentList }) => {
  const TOKEN = localStorage.getItem('accessToken');

  // 댓글 입력란을 확인할 수 있도록 아래와 같이 TOKEN 여부로 판단하는 조건을 주석처리했음
  // 실제 DB를 활용하여 화면을 확인할 때는 아래 TOKEN && ~ 를 활용

  return (
    <section className="comments">
      <div className="commentDiv">
        {/* {TOKEN && <Comment feedId={feedId} getCommentList={getCommentList} />} */}
        <Comment feedId={feedId} getCommentList={getCommentList} />
        <CommentList
          getCommentList={getCommentList}
          commentData={commentData}
        />
      </div>
    </section>
  );
};

export default Comments;
