import React from 'react';
import './Checkbox.scss';

const Checkbox = (props) => {
  const { id, checked, onChange } = props;

  return (
    <>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id} />
    </>
  );
};

export default Checkbox;
