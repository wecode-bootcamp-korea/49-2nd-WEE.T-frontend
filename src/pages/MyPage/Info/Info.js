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
  const [popup, setPopup] = useState(false);
  const [buyList, setBuyList] = useState(false);
  const [chatting, setChatting] = useState(false);

  const goBuyList = () => {
    setBuyList(true);
  };

  const goEdit = () => {
    navigate('/Edit');
  };
  const goSubscribe = () => {
    navigate('/subscribe');
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

  const goChatting = () => {
    if (data.isSubscribe === '1') {
      setChatting(true);
    } else {
      setPopup(true);
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
          <Button value="트레이너 채팅상담" onClick={goChatting} />
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
      {popup ? (
        <Popup
          title="회원님 구독전용서비스 구독하시겠어요?"
          leftBtnValue="구독하러가기"
          rightBtnValue="돌아가기"
          rightBtnClick={() => setPopup(false)}
          leftBtnClick={goSubscribe}
        />
      ) : null}
      {buyList ? <BuyList setBuyList={setBuyList} /> : null}
      {chatting ? <Chatting setChatting={setChatting} /> : null}
    </div>
  );
};

export default Info;
