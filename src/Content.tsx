import React from 'react';
import { createUseStyles } from 'react-jss';
import Nfc from './Nfc';

declare global {
  interface Window {
    ReactNativeWebView: any;
  }
}

const useStyles = createUseStyles({
  content: {
    padding: '40px',
    marginBottom: '56px'
  }
});

const Content = (props: { navValue: string }) => {
  const classes = useStyles();

  const postMessage = (message: string) => {
    alert(window.postMessage.length);
    if (window.postMessage.length !== 1) {
      setTimeout(postMessage, 200);
    } else {
      window.postMessage(message, '*');
    }
  };

  return (
    <div className={classes.content}>
      <Nfc postMessage={postMessage} />
    </div>
  );
};

export default Content;
