import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  nfc: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  value: {
    minHeight: '400px'
  }
});

interface IProps {
  postMessage: (message: string) => void;
}

const Nfc = (props: IProps) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleClickNfcButton = () => {
    alert('handleClickNfcButton');
    props.postMessage('nfc');
  };

  window.onmessage = (event: MessageEvent) => {
    if (typeof event.data === 'string') {
      setValue(event.data);
    }
  };

  return (
    <div className={classes.nfc}>
      <div className={classes.value}>value : {value as string}</div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickNfcButton}>
        Read NFC
      </Button>
    </div>
  );
};

export default Nfc;
