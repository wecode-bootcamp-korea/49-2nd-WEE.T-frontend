import React from 'react';
import { useLocation } from 'react-router';
import './Order.scss';

const Order = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="order">
      <section className="subscribeInfo sectionInner">
        <div className="subscribeTitle">구독상품 정보</div>
        <div className="subscribeDiv">
          <div className="subscribeImgAndMonth">
            <img
              className="subImg"
              src="/images/subscribeImg.png"
              alt="구독이미지"
            />
          </div>
          <table className="subTable">
            <tr>
              <td>구독 개월수</td>
              <td>상품 금액</td>
              <td>할인 금액</td>
              <td>결제 금액</td>
            </tr>
            <tr>
              <td>1개월</td>
              <td>9,800원</td>
              <td>(-)4,900원</td>
              <td>4,900원</td>
            </tr>
          </table>
        </div>
      </section>
      <section className="paymentMethod sectionInner">
        <div className="methodTitle">결제 방법</div>
        <div className="selectMethod">
          <div className="buttonDiv">
            <button type="button">
              <img src="/images/logo-toss-pay.png" alt="토스페이" />
            </button>
          </div>
          <div className="buttonDiv">
            <button type="button">
              <img src="/images/payment_small.png" alt="카카오페이" />
            </button>
          </div>
          <div className="buttonDiv">
            <button type="button">신용·체크카드</button>
          </div>
          <div className="buttonDiv">
            <button type="button">가상계좌</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
