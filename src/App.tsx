import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {
  Nfc,
  CropFree,
  GpsFixed,
  Bluetooth,
  Fingerprint
} from '@material-ui/icons';
import Content from './Content';

const useStyles = createUseStyles({
  bottomNavigation: {
    position: 'fixed',
    bottom: '0',
    width: '100%'
  },
  bottomNavigationAction: {
    minWidth: '50px !important'
  }
});

const App = () => {
  const classes = useStyles();
  const [navValue, setNavValue] = useState('nfc');
  return (
    <div>
      <Content navValue={navValue} />
      <BottomNavigation
        value={navValue}
        onChange={(event, newValue) => {
          setNavValue(newValue);
        }}
        className={classes.bottomNavigation}>
        <BottomNavigationAction
          label="NFC"
          value="nfc"
          icon={<Nfc />}
          className={classes.bottomNavigationAction}
        />
        <BottomNavigationAction
          label="QRCode"
          value="qrcode"
          icon={<CropFree />}
          className={classes.bottomNavigationAction}
        />
        <BottomNavigationAction
          label="GPS"
          value="gps"
          icon={<GpsFixed />}
          className={classes.bottomNavigationAction}
        />
        <BottomNavigationAction
          label="Beacon"
          value="beacon"
          icon={<Bluetooth />}
          className={classes.bottomNavigationAction}
        />
        <BottomNavigationAction
          label="Fingeprint"
          value="fingerprint"
          icon={<Fingerprint />}
          className={classes.bottomNavigationAction}
        />
      </BottomNavigation>
    </div>
  );
};

export default App;
