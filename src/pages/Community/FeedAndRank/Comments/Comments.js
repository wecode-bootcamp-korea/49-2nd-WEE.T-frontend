import React, { useEffect, useState } from 'react';
import Comment from './Comment/Comment';
import CommentList from './CommentList/CommentList';
import { BASE_AWS_API } from '../../../../config';
import './Comments.scss';

const Comments = (feedIdData) => {
  const TOKEN = localStorage.getItem('accessToken');

  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    fetchCommentList();
  }, []);

  const { feedId } = feedIdData;

  const fetchCommentList = () => {
    fetch(`${BASE_AWS_API}/comments?feedId=${feedId}`, {
      // fetch(`http://localhost:8000/comments?feedId=${feedId}`, {
      // fetch(`/data/commentData.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(TOKEN && { Authorization: TOKEN }),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error('[GET] 댓글 데이터 통신 실패');
        }
        return response.json();
      })
      .then((result) => {
        setCommentData(result.data);
      })
      .catch((Error) => console.log(Error));
  };

  return (
    <section className="comments">
      <div className="commentDiv">
        {TOKEN && (
          <Comment
            feedIdData={feedIdData}
            fetchCommentList={fetchCommentList}
          />
        )}
        <CommentList
          feedIdData={feedIdData}
          fetchCommentList={fetchCommentList}
          commentData={commentData}
        />
      </div>
    </section>
  );
};

export default Comments;
