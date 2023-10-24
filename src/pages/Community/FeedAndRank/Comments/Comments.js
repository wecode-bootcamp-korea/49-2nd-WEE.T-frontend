import React, { useEffect, useState } from 'react';
import Comment from './Comment/Comment';
import CommentList from './CommentList/CommentList';
import './Comments.scss';

const Comments = (feedId) => {
  const token = localStorage.getItem('accessToken');
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    fetchCommentList();
  }, []);

  const fetchCommentList = () => {
    fetch(`/data/commentData.json`, {
      // /data/commentData.json
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.data.comments);
        setCommentData(data.data.comments);
      });
  };

  return (
    <section className="comments">
      <div className="commentDiv">
        {token ? (
          <Comment feedId={feedId} fetchCommentList={fetchCommentList} />
        ) : null}
        <CommentList
          feedId={feedId}
          fetchCommentList={fetchCommentList}
          commentData={commentData}
        />
      </div>
    </section>
  );
};

export default Comments;
