import React from 'react';

const BaseNumberInput = ({ label, value, onChangeBase, readOnly = false }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeBase && onChangeBase(e.target.value)}
        readOnly={readOnly}
      />
    </div>
  );
};

export default BaseNumberInput;