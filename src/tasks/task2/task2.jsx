import React, { useState } from 'react';

function Task2() {
  const [matrix, setMatrix] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  const [modifiedMatrix, setModifiedMatrix] = useState(null);
  const [rotateLeft, setRotateLeft] = useState(false);

  const rotateMatrix = (m, rotateToLeft) => {
    let newMatrix;
    if (rotateToLeft) {
      newMatrix = m[0].map((val, index) => m.map(row => row[index])).reverse();
    } else {
      newMatrix = m[0].map((val, index) => m.map(row => row[m.length - 1 - index])).reverse();
    }
    return newMatrix;
  };

  const handleRotate = () => {
    setModifiedMatrix(rotateMatrix(matrix, rotateLeft));
  };

  const handleCheckboxChange = () => {
    if (rotateLeft) {
      setModifiedMatrix(null); // Очищення стану модифікованої матриці, якщо галочка віджата
    }
    setRotateLeft(!rotateLeft);
  };

  return (
    <div>
      <p>TASK 2</p>
      <div>
        <label>
          Повернути вліво
          <input
            type="checkbox"
            checked={rotateLeft}
            onChange={handleCheckboxChange}
          />
        </label>
        <button onClick={handleRotate}>Повернути</button>
      </div>
      <div>
        <h3>Початкова матриця:</h3>
        <div>{matrix.map((row, idx) => <div key={idx}>{row.join(' ')}</div>)}</div>
      </div>
      {modifiedMatrix && (
        <div>
          <h3>Модифікована матриця:</h3>
          <div>{modifiedMatrix.map((row, idx) => <div key={idx}>{row.join(' ')}</div>)}</div>
        </div>
      )}
    </div>
  );
}

export default Task2;
