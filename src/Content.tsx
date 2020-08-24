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
    try {
      let postMessage;
      if (window.ReactNativeWebView) {
        postMessage = window.ReactNativeWebView.postMessage;
        postMessage(message);
      } else {
        postMessage = window.parent.postMessage;
        postMessage(message, '*');
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div className={classes.content}>
      <Nfc postMessage={postMessage} />
    </div>
  );
};

export default Content;
