import React, { useEffect, useState } from 'react';
import './Bar.scss';
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';

const offset = 0.1; // width 증감 offset
const animateTime = 1; // animation 지속시간

const Bar = (props) => {
  const { label, unit, total, value } = props;
  const [percentage, setPercentage] = useState(0);
  const [width, setWidth] = useState(0); //width is percentage value;
  const [backgroundColor, setBackgroundColor] = useState('#5e3dea');
  const [isPopup, setIsPopup] = useState(false);
  const navigate = useNavigate();

  const goEdit = () => {
    navigate('/edit');
    setIsPopup(false);
  };

  const goUpdate = () => {
    setIsPopup(true);
  };

  useEffect(() => {
    const _percentage = (value / total) * 100;
    if (_percentage > 100) setBackgroundColor('red');
    setPercentage(_percentage > 100 ? 100 : _percentage);
  }, [total, value]);

  useEffect(() => {
    let timer = null;
    if (percentage) {
      let _width = 0;
      timer = setInterval(() => {
        _width = _width + offset;
        setWidth(_width);
        if (Math.floor(_width) === Math.floor(percentage)) {
          clearInterval(timer);
          setWidth(percentage);
        }
      }, animateTime);
    }

    return () => {
      clearInterval(timer);
    };
  }, [percentage]);

  return (
    <div className="bar">
      <div className="look">
        <span className="barLabel">{label}</span>

        {value === undefined ? (
          <span className="valueAndUnit">{`${value} ${unit}`} </span>
        ) : (
          <button
            onClick={goUpdate}
            className="valueUndefined"
          >{`${value} ${unit}`}</button>
        )}
      </div>
      <div className="barBox">
        <div
          className="barBoxAll"
          style={{
            width: `${width}%`,
            backgroundColor: `${backgroundColor}`,
          }}
        />
      </div>
      {isPopup ? (
        <Popup
          title="내상태관리 가기"
          leftBtnValue="이동"
          rightBtnValue="닫기"
          rightBtnClick={() => {
            setIsPopup(false);
          }}
          leftBtnClick={goEdit}
        />
      ) : null}
    </div>
  );
};

export default Bar;
