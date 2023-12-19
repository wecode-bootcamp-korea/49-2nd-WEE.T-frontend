import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { BASE_AWS_API } from '../../../../../config';
import './CommentList.scss';

const CommentList = ({ getCommentList, commentData }) => {
  const TOKEN = 'token';

  const navigate = useNavigate();

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
    if (TOKEN) {
      if (isCheckEditComment) {
        fetch(`댓글수정엔드포인트`, {
          // fetch(`${BASE_AWS_API}/comments?commentId=${id}`, {
          // fetch(`http://localhost:8000/comments?commentId=${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: TOKEN,
          },
          body: JSON.stringify({
            content: commentEdit,
          }),
        }).then((response) => {
          if (response.ok) {
            alert('댓글이 수정되었습니다.');
            getCommentList();
            setEditingCommentId(null);
          }
        });
      } else {
        alert('댓글을 작성해주세요.');
      }
    } else {
      alert('로그인 후 댓글 작성이 가능합니다.');
      navigate('/login');
    }
  };

  const handleCommentDelete = (id) => {
    if (TOKEN) {
      fetch(`댓글삭제엔드포인트`, {
        // fetch(`${BASE_AWS_API}/comments?commentId=${id}`, {
        // fetch(`http://localhost:8000/comments?commentId=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: TOKEN,
        },
      }).then((response) => {
        if (response.ok) {
          getCommentList();
          alert('댓글이 삭제되었습니다.');
        }
      });
    } else {
      alert('로그인 후 댓글 삭제가 가능합니다.');
      navigate('/login');
    }
  };

  return (
    <div className="commentList">
      <ol className="commentContainer">
        {commentData?.map((data) => (
          <li className="commentOlList" key={data.id}>
            <div className="userInfo">
              <img src={data.badge} alt="챌린지뱃지" className="userBadgeImg" />
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
              <div className="writeData">{formatCreatedAt(data.createAt)}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CommentList;
