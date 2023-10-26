import React from 'react';
import { useLocation } from 'react-router';
// import './Order.scss';

const Order = () => {
  const location = useLocation();
  console.log(location.state);

  const subscribeId = localStorage.getItem('subscribeId');
  const month = localStorage.getItem('month');
  const price = localStorage.getItem('price');
  console.log(subscribeId, month, price);

  return <div>결제페이지 테스트</div>;
};

export default Order;
