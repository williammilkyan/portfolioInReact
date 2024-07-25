// src/components/Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static" color="primary" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit" style={{ margin: '0 auto' }}>
          &copy; 2024 My Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
