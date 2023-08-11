import React, { useState } from 'react';
import { isPalindrome } from './logic';

function Task1() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setResult(isPalindrome(e.target.value) ? 'Строка является палиндромом!' : 'Строка не является палиндромом!');
  };

  return (
    <div>
      <p>TASK 1</p>
      <input type="text" onChange={handleInputChange} value={input} />
      <p>{result}</p>
    </div>
  );
}

export default Task1;
