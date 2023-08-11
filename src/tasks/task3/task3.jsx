import React, { useState } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import { evaluateExpression } from './logic';

function Task3() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      setInput(evaluateExpression(input));
    } else {
      setInput(prevInput => prevInput + value);
    }
  };

  return (
    <div>
      <p>TASK 3</p>
      <TextField type="text" value={input} fullWidth readOnly />
      <Grid container spacing={1}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/'].map((buttonValue) => (
          <Grid item xs={3} key={buttonValue}>
            <Button variant="contained" color="primary" onClick={() => handleButtonClick(buttonValue)} fullWidth>
              {buttonValue}
            </Button>
          </Grid>
        ))}
        <Grid item xs={3}>
          <Button variant="contained" color="secondary" onClick={() => setInput('')} fullWidth>
            CLEAR
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="secondary" onClick={() => setInput(input.slice(0, -1))} fullWidth>
            DEL
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="default" onClick={() => handleButtonClick('=')} fullWidth>
            =
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Task3;
