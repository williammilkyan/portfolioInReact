// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          William Yan Portfolio
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: 16 }}>
            Home
          </NavLink>
          <NavLink to="/about" style={{ color: 'inherit', textDecoration: 'none', marginRight: 16 }}>
            About
          </NavLink>
          <NavLink to="/projects" style={{ color: 'inherit', textDecoration: 'none', marginRight: 16 }}>
            Projects
          </NavLink>
          <NavLink to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>
            Contact
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
