import React, { useEffect, useState } from 'react';
import './Checkbox.scss';

const Checkbox = (props) => {
  const { name, value, label, onChange, data } = props;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (value === data) {
      setChecked(true);
    }
  }, [value, data]);

  return (
    <div>
      <label>
        {label}
        <input
          type="radio"
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
      </label>
    </div>
  );
};

export default Checkbox;
