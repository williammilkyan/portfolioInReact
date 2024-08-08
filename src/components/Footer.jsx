// src/components/Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <AppBar position="static" color="primary" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit" style={{ margin: '0 auto' }}>
          &copy; {currentYear} William Yan Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
