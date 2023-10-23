import React from 'react';
// import { useLocation } from 'react-router';
import './Order.scss';

const Order = () => {
  return (
    <div className="orderMain">
      <div className="orderMainContainer">
        <div className="orderEntireSection">
          <div className="topSection">주문자내역</div>
          <div className="middleSection">중간섹션</div>
          <div className="buttomSection">
            <div className="PaymentType">
              <p>결 제 방 식</p>
              <div className="typeBtn">
                <button>카 카 오 페 이</button>
                <button>무 통 장 결 제</button>
              </div>
            </div>
            <div className="finalBtn">
              <button>결 제</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
