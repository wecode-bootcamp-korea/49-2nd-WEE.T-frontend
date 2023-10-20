import React, { useEffect, useState } from 'react';
import './BuyList.scss';

const BuyList = (props) => {
  const { setBuyList } = props;
  const [purchaseList, setPurchaseList] = useState();
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsImlzTmV3IjpmYWxzZSwiaWF0IjoxNjk3Nzc3Nzc3LCJleHAiOjE2OTc4MjA5Nzd9.rkf5DlI9qSyPDhVkEkcxoiCA8s0Ycnop6gzstQmNj6w';

  useEffect(() => {
    fetch('http://10.58.52.81:8000/users/orders', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setPurchaseList(result);
      });
  }, []);

  return (
    <div className="buyList">
      <div className="buyListContainer">
        <div className="title">
          <img className="logo" src="./images/logo3.jpg" alt="로고" />
          <h1> 구매내역조회 </h1>
        </div>
        <div className="buyListBox">
          <table className="table">
            <tr className="header">
              <td>주문번호</td>
              <td>결제방식</td>
              <td>구매날짜</td>
              <td>구독시작일</td>
              <td>구독종료일</td>
              <td>결제가격</td>
            </tr>
            {purchaseList?.map((orders) => {
              const {
                orderId,
                payment,
                orderDate,
                serviceStartDate,
                serviceEndDate,
                price,
              } = orders;
              return (
                <tr key={orderId} className="detail">
                  <td>{orderId}</td>
                  <td>{payment}</td>
                  <td>{orderDate}</td>
                  <td>{serviceStartDate}</td>
                  <td>{serviceEndDate}</td>
                  <td>{`${price.toLocaleString('ko-KR')}원`}</td>
                </tr>
              );
            })}
          </table>
        </div>

        <div className="buttonContainer">
          <button
            className="closeBtn"
            onClick={() => {
              setBuyList(false);
            }}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyList;
