import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { value, onClick } = props;
  return (
    <div>
      <button className="button" onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Button;
