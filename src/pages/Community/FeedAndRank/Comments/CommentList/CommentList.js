import React from 'react';
import './CommentList.scss';

const CommentList = ({ commentData }) => {
  const formatCreatedAt = (createdAt) => {
    const formattedDate = new Date(createdAt).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
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
            <div className="userComment">{data.content}</div>
            <div className="isMyDiv">
              {data.isMyComment ? (
                <div className="btnDiv">
                  <button type="button" className="changeBtn btnBox">
                    수정
                  </button>
                  <button type="button" className="deleteBtn btnBox">
                    삭제
                  </button>
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
