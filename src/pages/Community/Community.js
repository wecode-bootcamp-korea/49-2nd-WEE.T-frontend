import React, { useState, useEffect } from 'react';
import './Community.scss';

const Community = () => {
  const [feedList, setFeedList] = useState({});

  useEffect(() => {
    fetch('/data/communityData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const feedData = data.data;
        setFeedList(feedData);
      });
  }, []);

  const isEmpty = Object.keys(feedList).length > 0;

  if (!isEmpty) {
    return null;
  }

  return (
    <div id="content" className="community">
      <div className="container sectionInner">
        <section className="challengeBanner">challenge banner 위치</section>
        <section className="feedAndRank">
          <div className="feedBox">
            <div className="btnDiv">
              <button type="button" className="writeBtn">
                글쓰기
              </button>
            </div>
            <div className="totalFeedCount">
              총 {feedList.totalCount}개의 게시글이 있습니다.
            </div>
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
                          <button type="button" className="changeBtn">
                            수정
                          </button>
                          <button type="button" className="deleteBtn">
                            삭제
                          </button>
                        </div>
                      ) : null}
                    </div>
                    <div className="feedImage">
                      <img
                        src="https://i.postimg.cc/6px0W0df/1.jpg"
                        alt="feed이미지"
                      />
                    </div>
                    <div className="feedText">
                      <div className="text">{feed.content}</div>
                      <div className="commentDiv">
                        <div className="commentThings">댓글 12개</div>
                        <div>comment component 자리</div>
                      </div>
                      <div className="writeDate">2023년 10월 13일</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="ranking">
            <div>랭킹박스</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Community;
