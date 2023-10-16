import React from 'react';
import './FeedList.scss';

const FeedList = ({ feedList }) => {
  return (
    <ul className="feedList">
      {feedList.feeds.map((feed) => (
        <li key={feed.id}>
          <div className="feedContent">
            <div className="userDiv">
              <div className="userInfo">
                <div className="badge">
                  <img src="/images/dog.jpg" alt="배지" />
                </div>
                <div className="nickname">{feed.userNickname}</div>
              </div>
              {feed.isMyPost ? (
                <div className="btnBox">
                  <button type="button" className="changeBtn subBtn">
                    수정
                  </button>
                  <button type="button" className="deleteBtn subBtn">
                    삭제
                  </button>
                </div>
              ) : null}
            </div>
            <div className="feedImage">
              <img src="https://i.postimg.cc/6px0W0df/1.jpg" alt="feed이미지" />
            </div>
            <div className="feedText">
              <div className="text">{feed.content}</div>
              <div className="commentDiv">
                <div className="commentThings">댓글 {feed.coment}개</div>
                <div>comment component 자리</div>
              </div>
              <div className="writeDate">2023년 10월 13일</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FeedList;
