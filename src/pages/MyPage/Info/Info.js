import React, { useEffect, useState } from 'react';
import './Info.scss';
import Button from '../../../components/Button/Button';
import Profile from './Profile/Profile';
import Current from './Current/Current';
import Goal from './Goal/Goal';
import Rank from './Rank/Rank';
import { TOTAL } from '../../../data/total';
import { useNavigate } from 'react-router-dom';
import Popup from '../../../components/Popup/Popup';
import BuyList from './BuyList/BuyList';
import Chatting from './Chatting/Chatting';

const Info = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [isPopup, setIsPopup] = useState(false);
  const [isBuyList, setIsBuyList] = useState(false);
  const [isChatting, setIsChatting] = useState(false);
  // const token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsImlzTmV3IjpmYWxzZSwiaWF0IjoxNjk3Nzc3Nzc3LCJleHAiOjE2OTc4MjA5Nzd9.rkf5DlI9qSyPDhVkEkcxoiCA8s0Ycnop6gzstQmNj6w';

  const goBuyList = () => {
    setIsBuyList(true);
  };

  const goEdit = () => {
    navigate('/Edit');
  };
  const goSubscribe = () => {
    navigate('/subscribe');
  };

  // useEffect(() => {
  //   fetch('http://10.58.52.81:8000/users', {
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

  useEffect(() => {
    fetch('./data/condition.json')
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setData(result.data);
      });
  }, []);

  const goChatting = () => {
    if (data.isSubscribe === 1) {
      setIsChatting(true);
    } else {
      setIsPopup(true);
    }
  };
  return (
    <div className="info">
      <div className="infoContainer">
        <div className="myNickName">
          <img className="logo" src="./images/logo3.jpg" alt="로고" />
          <h1 className="title">마이페이지</h1>
        </div>

        <div className="option">
          <Button onClick={goChatting}>트레이너 채팅상담</Button>
          <div className="optionBox">
            <span className="myEdit" onClick={goBuyList}>
              구매내역
            </span>
            <div className="line" />
            <span className="myEdit" onClick={goEdit}>
              내상태관리
            </span>
          </div>
        </div>

        <div className="abilityBox">
          <div className="abilityBoxFirst">
            <Profile data={data} />
          </div>

          <div className="abilityBoxSecond">
            <Current data={data} total={TOTAL} />
          </div>
        </div>
      </div>

      <div className="goalContainer">
        <Rank data={data} />

        <div className="goalBox">
          <Goal data={data} total={TOTAL} />
        </div>
      </div>
      {isPopup ? (
        <Popup
          title="구독전용서비스 입니다."
          leftBtnValue="구독하러가기"
          rightBtnValue="닫기"
          rightBtnClick={() => setIsPopup(false)}
          leftBtnClick={goSubscribe}
        />
      ) : null}
      {isBuyList ? <BuyList setBuyList={setIsBuyList} /> : null}
      {isChatting ? (
        <Chatting nickname={data.nickname} setChatting={setIsChatting} />
      ) : null}
    </div>
  );
};

export default Info;
