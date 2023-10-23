import React, { useEffect, useState } from 'react';
import './ChattingBtn.scss';
import Chatting from '../../pages/MyPage/Info/Chatting/Chatting';
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';

const ChattingBtn = () => {
  const [isChatting, setIsChatting] = useState(false);
  const [isPopup, setIsPopup] = useState({});
  const [data, setData] = useState();
  const navigate = useNavigate();
  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsImlzTmV3IjpmYWxzZSwiaWF0IjoxNjk3Nzc3Nzc3LCJleHAiOjE2OTc4MjA5Nzd9.rkf5DlI9qSyPDhVkEkcxoiCA8s0Ycnop6gzstQmNj6w';

  const goChatting = () => {
    if (data === undefined) {
      setIsPopup({
        open: true,
        title: '로그인후 이용해주세요.',
        leftBtnValue: '로그인으로 이동',
        rightBtnValue: '닫기',
        leftBtnClick: goLogin,
        rightBtnClick: closePopup,
      });
    } else if (data.isSubscribe === 1) {
      setIsChatting(true);
    } else if (data.isSubscribe === 0) {
      setIsPopup({
        open: true,
        title: '회원님 구독전용서비스 구독하시겠어요?',
        leftBtnValue: '구독하러가기',
        rightBtnValue: '닫기',
        leftBtnClick: goSubscribe,
        rightBtnClick: closePopup,
      });
    }
  };

  const closePopup = () => {
    setIsPopup({ ...isPopup, open: false });
  };

  const goSubscribe = () => {
    navigate('/subscribe');
    setIsPopup({ ...isPopup, open: false });
  };

  const goLogin = () => {
    navigate('/login');
    setIsPopup({ ...isPopup, open: false });
  };

  useEffect(() => {
    fetch('./data/condition.json')
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result.data);
      });
  }, []);

  // useEffect(() => {
  //   fetch('http://10.58.52.69:8000/users', {
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       Authorization: token,
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((result) => {
  //       setData(result.data);
  //     });
  // }, []);

  return (
    <div className="chattingBtn">
      <button onClick={goChatting} className="chattingBtnOpen">
        1:1 <br /> 트레이너
        <br /> 만나기
      </button>
      {isChatting ? (
        <Chatting nickname={data.nickname} setChatting={setIsChatting} />
      ) : null}
      {isPopup.open && (
        <Popup
          title={isPopup.title}
          leftBtnValue={isPopup.leftBtnValue}
          rightBtnValue={isPopup.rightBtnValue}
          leftBtnClick={isPopup.leftBtnClick}
          rightBtnClick={isPopup.rightBtnClick}
        />
      )}
    </div>
  );
};

export default ChattingBtn;
