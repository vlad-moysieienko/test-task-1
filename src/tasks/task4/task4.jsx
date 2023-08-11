import React, { useState } from 'react';
import { areBracketsClosed } from './logic';

function Task4() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    const checkResult = areBracketsClosed(e.target.value);
    if (checkResult === 'closed') {
      setResult('Всі дужки закриті');
    } else if (checkResult === 'notClosed') {
      setResult('Скобки не закриті');
    } else {
      setResult('Дужки відсутні');
    }
  };

  return (
    <div>
      <p>TASK 4</p>
      <input type="text" onChange={handleInputChange} value={input} />
      <p>{result}</p>
    </div>
  );
}

export default Task4;
