import React from 'react';
import './Community.scss';

const Community = () => {
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
            <ul className="feedList">
              <li>
                <div className="feedContent">
                  <div className="userDiv">
                    <div className="userInfo">
                      <div className="badge">
                        <img src="/images/dog.jpg" alt="배지" />
                      </div>
                      <div className="nickname">Wecode</div>
                    </div>
                    <div className="btnBox">
                      <button type="button" className="changeBtn">
                        수정
                      </button>
                      <button type="button" className="deleteBtn">
                        삭제
                      </button>
                    </div>
                  </div>
                  <div className="feedImage">
                    <img
                      src="https://i.postimg.cc/6px0W0df/1.jpg"
                      alt="feed이미지"
                    />
                  </div>
                  <div className="feedText">
                    <h4>How to Create Sunshine Effect in Studio</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="">1</div>
        </section>
      </div>
    </div>
  );
};

export default Community;
