import React from 'react';
import './Popup.scss';
import Button from '../Button/Button';

const Popup = (props) => {
  const { title, leftBtnValue, leftBtnClick, rightBtnValue, rightBtnClick } =
    props;

  return (
    <div className="popup">
      <div className="popupBox">
        <div className="logoTitle">
          <img src="./images/logo.png" alt="로고사진" />
          <p>{title}</p>
        </div>
        <div className="selectContainer">
          <Button value={leftBtnValue} onClick={leftBtnClick} />
          <Button value={rightBtnValue} onClick={rightBtnClick} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
