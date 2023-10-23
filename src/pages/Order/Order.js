import React from 'react';
import { useLocation } from 'react-router';
// import './Order.scss';

const Order = () => {
  const location = useLocation();
  console.log(location.state);
  return <div>결제페이지 테스트</div>;
};

export default Order;
