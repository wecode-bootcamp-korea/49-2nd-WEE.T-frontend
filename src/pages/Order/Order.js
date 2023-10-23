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
              <td>Lorem</td>
              <td>Ipsum</td>
              <td>Dolor</td>
            </tr>
            <tr>
              <td>Lorem</td>
              <td>Lorem Ipsum Dolor Lorem Ipsum Dolor</td>
              <td>Dolor</td>
            </tr>
          </table>
        </div>
      </section>
      <section>2</section>
    </div>
  );
};

export default Order;
