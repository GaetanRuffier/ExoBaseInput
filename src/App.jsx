import React, { useState } from 'react';
import BaseNumberInput from './component/BaseNumberInput';

const App = () => {
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');

  // Fonction pour convertir un nombre décimal en binaire
  const handleDecimalChange = (value) => {
    setDecimal(value);
    if (value === '') {
      setBinary('');
    } else {
      setBinary(parseInt(value, 10).toString(2));
    }
  };

  // Fonction pour convertir un nombre binaire en décimal
  const handleBinaryChange = (value) => {
    setBinary(value);
    if (value === '') {
      setDecimal('');
    } else {
      const isValidBinary = /^[01]*$/.test(value);
      if (isValidBinary) {
        setDecimal(parseInt(value, 2).toString(10));
      } else {
        setDecimal('Invalid');
      }
    }
  };

  return (
    <div>
      <h1>Conversion Décimal - Binaire</h1>
      <BaseNumberInput
        label="Nombre décimal :"
        value={decimal}
        onChangeBase={handleDecimalChange}
      />
      <BaseNumberInput
        label="Nombre binaire :"
        value={binary}
        onChangeBase={handleBinaryChange}
      />
    </div>
  );
};

export default App;
