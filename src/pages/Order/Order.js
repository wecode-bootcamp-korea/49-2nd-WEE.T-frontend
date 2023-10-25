import React, { useState } from 'react';
import { useLocation } from 'react-router';
import './Order.scss';

const Order = () => {
  const location = useLocation();
  // const subscribeId = location.state.subscribeId;
  // console.log(subscribeId);

  // const fetchOrder = () => {
  //   fetch(`EndPoint/subscription`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // "Authorization": TOKEN
  //     },
  //     body: JSON.stringify({
  //       subscribeId,
  //     }),
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };
  const onClickPayment = () => {
    const [isProductExpanded, setProductExpanded] = useState(false);
    const toggleProduct = () => {
      setProductExpanded(!isProductExpanded);
    };
    const IMP = window.IMP;
    const handlePayment = () => {
      IMP.init('imp52282180');
      IMP.request_pay(
        {
          pg: 'kakaopay',
          // pay_method: 'card',
          name: 'test',
          amount: 3900,
        },
        function (rsq) {
          const { status, error_msg, imp_uid } = rsq;
          if (error_msg) {
            alert(error_msg);
          }
          if (status === 'paid') {
            fetch(`http://10.58.52.163:8000/payments`, {
              method: 'POST',
              body: JSON.stringify({ imp_uid }),
              headers: {
                'Content-Type': 'application/json',
                // Authorization: localStorage.getItem('accessToken'),
              },
            })
              .then((response) => {
                if (response.status === 200) {
                  return response.json();
                }
                throw new Error('communication failure');
              })
              .then((result) => {
                console.log(result);
                if (result.message === 'SUCCESS_SUBSCRIPTION_AND_PAYMENT') {
                  localStorage.setItem('userId', result.userId);
                  localStorage.setItem('amount', result.amount);
                  localStorage.setItem('pg_provider', result.pg_provider);
                  alert('결제완료');
                } else {
                  alert('실패');
                }
              })
              .catch((error) => {
                console.error('오류 발생:', error);
              });
          }
        },
      );
    };

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
              <button type="button" onClick={onClickPayment}>
                <img src="/images/payment_small.png" alt="카카오페이" />
              </button>
            </div>
            <div className="buttonDiv">
              <button type="button">
                <img src="/images/logo-toss-pay.png" alt="토스페이" />
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
};
export default Order;
