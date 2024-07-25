// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          My Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
