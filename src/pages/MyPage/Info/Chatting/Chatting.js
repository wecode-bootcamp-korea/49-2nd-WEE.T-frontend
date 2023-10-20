import React, { useState } from 'react';
import './Chatting.scss';

const Chatting = (props) => {
  const { setChatting } = props;

  const [text, setText] = useState('');
  // console.log(text);
  const chattingText = (e) => {
    setText(e.target.value);
  };
  const sandText = () => {
    // console.log('전송');
    setText('');
  };
  const onSubmitSearch = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setText('');
    }
  };

  return (
    <div className="chatting">
      <div className="chattingContainer">
        <div className="title">
          <img className="logo" src="./images/logo3.jpg" alt="로고" />
          <h1> 채팅창 </h1>
        </div>

        <div className="chattingBox">
          <div className="contextItemContainer">
            <img
              className="admin"
              src="https://file.sportsseoul.com/news/cms/2023/09/19/news-p.v1.20230919.ceac473d21cc43bd92205006484893ff_P1.jpg"
              alt="황철순"
            />

            <div className="contextTimeBox">
              <span className="contextItem">안녕하세요. 황철순입니다.</span>
              <span className="time">12:00 오후</span>
            </div>
          </div>

          <div className="contextItemContainer">
            <img
              className="admin"
              src="./images/logo3.jpg"
              alt="트레이너사진"
            />

            <div className="contextTimeBox">
              <span className="contextItem">
                안녕하세요. 황철순씨 먼저 WEE.T 식구가 된걸 너무 환영합니다.
                저는 황철순씨의 파트너 울끈불끈 위코드 트레이너 입니다. 오늘부터
                벌크업을 시작해볼까요?
              </span>
              <span className="time">12:01 오후</span>
            </div>
          </div>

          <div className="contextItemContainer">
            <img
              className="admin"
              src="https://file.sportsseoul.com/news/cms/2023/09/19/news-p.v1.20230919.ceac473d21cc43bd92205006484893ff_P1.jpg"
              alt="황철순"
            />

            <div className="contextTimeBox">
              <span className="contextItem">
                좋습니다! 저는 준비완료입니다.
              </span>
              <span className="time">12:02 오후</span>
            </div>
          </div>

          <div className="contextItemContainer">
            <img
              className="admin"
              src="./images/logo3.jpg"
              alt="트레이너사진"
            />

            <div className="contextTimeBox">
              <span className="contextItem">
                운동경력? 드시던식단? 평소생활루틴은 어떻게 되는지
                알려주실수있을까요? 그래야 제가 좀더 디테일하게 운동컨설팅을
                해드릴수있을거 같아요.
              </span>
              <span className="time">12:03 오후</span>
            </div>
          </div>
        </div>

        <div className="sendChatContainer">
          <textarea
            type="text"
            className="sendChat"
            value={text}
            placeholder="WEE.T 구독회원님 반갑습니다. 메세지를 입력하세요."
            onChange={chattingText}
            onKeyPress={onSubmitSearch}
          />

          <i onClick={sandText} class="fa-solid fa-paper-plane" />
        </div>

        <div className="buttonContainer">
          <button
            className="closeBtn"
            onClick={() => {
              setChatting(false);
            }}
          >
            채팅방나가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatting;
