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
        readOnly={true}
      />
    </div>
  );
};

export default App;
