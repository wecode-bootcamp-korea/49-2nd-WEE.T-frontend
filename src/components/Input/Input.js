import React, { useEffect, useMemo } from 'react';
import './Input.scss';

const textMaxLength = 8;

const Input = (props) => {
  const {
    placeholder,
    type,
    disabled,
    name,
    onChange,
    value,
    size = '',
    min,
    max,
    setValid,
  } = props;

  const isText = useMemo(() => {
    if (type === 'text') return true;
    return false;
  }, [type]);

  const validationText = useMemo(() => {
    if (isText) {
      if (value?.length > textMaxLength) {
        return `${textMaxLength}글자 이하로 입력하세요.`;
      }
    } else {
      if (!(Number(min) <= Number(value) && Number(value) <= Number(max))) {
        return `${min} 보다 크고 ${max} 보다 작게 입력하세요.`;
      }
    }
    return null;
  }, [isText, max, min, value]);

  useEffect(() => {
    setValid(validationText ? false : true);
  }, [validationText, setValid]);

  return (
    <>
      <input
        onWheel={(e) => e.target.blur()}
        className={`input ${size}`}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        name={name}
        onChange={onChange}
        value={value}
      />
      <p className="validation">{validationText ? validationText : ''}</p>
    </>
  );
};

export default Input;
