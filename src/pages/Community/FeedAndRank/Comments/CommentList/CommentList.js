import React, { useState } from 'react';
import './CommentList.scss';

const CommentList = ({ feedId, fetchCommentList, commentData }) => {
  // const accessToken = localStorage.getItem('accessToken');
  const [commentEdit, setCommentEdit] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);
  const isCheckEditComment = commentEdit.length >= 1;

  const formatCreatedAt = (createdAt) => {
    const formattedDate = new Date(createdAt).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  };

  const handleCommentEdit = (id) => {
    const commentToEdit = commentData.find((comment) => comment.id === id);
    setCommentEdit(commentToEdit.content);
    setEditingCommentId(id);
  };

  const handleCommentEditSave = (id) => {
    // if (accessToken) {
    if (isCheckEditComment) {
      fetch(`/endpoint/comments/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          // Authorization: accessToken,
        },
        body: JSON.stringify({
          feedId,
          content: commentEdit,
        }),
      }).then((response) => {
        console.log(response);
        if (response.ok) {
          fetchCommentList();
          alert('댓글이 수정되었습니다.');
        }
      });
    } else {
      alert('댓글을 작성해주세요.');
    }
    // } else {
    //   alert('로그인 후 댓글 작성이 가능합니다.');
    //   navigate('/login');
    // }
  };

  const handleCommentDelete = (id) => {
    // if (accessToken) {
    fetch(`/endpoint/comments/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // Authorization: accessToken,
      },
      // body: JSON.stringify({
      //   feedId,
      //   content: commentEdit,
      // }),
    }).then((response) => {
      console.log(response);
      if (response.ok) {
        fetchCommentList();
        alert('댓글이 삭제되었습니다.');
      }
    });
    // } else {
    //   alert('로그인 후 댓글 삭제가 가능합니다.');
    //   navigate('/login');
    // }
  };

  return (
    <div className="commentList">
      <ol className="commentContainer">
        {commentData?.map((data) => (
          <li className="commentOlList" key={data.id}>
            <div className="userInfo">
              <img
                src="/images/dog.jpg"
                alt="챌린지뱃지"
                className="userBadgeImg"
              />
              <div className="userNickname">{data.nickname}</div>
            </div>
            {editingCommentId === data.id ? (
              <input
                className="commentEditInput"
                type="text"
                maxLength="50"
                defaultValue={commentEdit}
                onChange={(event) => setCommentEdit(event.target.value)}
              />
            ) : (
              <div className="userComment">{data.content}</div>
            )}

            <div className="isMyDiv">
              {data.isMyComment ? (
                <div className="btnDiv">
                  {editingCommentId === data.id ? (
                    <>
                      <button
                        type="button"
                        className="changeBtn btnBox"
                        onClick={() => handleCommentEditSave(data.id)}
                      >
                        저장
                      </button>
                      <button
                        type="button"
                        className="deleteBtn btnBox"
                        onClick={() => setEditingCommentId(null)}
                      >
                        취소
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        className="changeBtn btnBox"
                        onClick={() => handleCommentEdit(data.id)}
                      >
                        수정
                      </button>
                      <button
                        type="button"
                        className="deleteBtn btnBox"
                        onClick={() => handleCommentDelete(data.id)}
                      >
                        삭제
                      </button>
                    </>
                  )}
                </div>
              ) : null}
              <div className="writeData">{formatCreatedAt(data.createdAt)}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CommentList;
