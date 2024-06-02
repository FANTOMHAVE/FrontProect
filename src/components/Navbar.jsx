import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
      <div id="block1">
          <Button component={Link} to="/" id="i1">
              <font size="8" color="white" face="Impact">Aputeka</font>
          </Button>
          <Button component={Link} to="/" className="nav-button">
              <font size="5" color="darkcyan" face="Impact">Главная</font>
          </Button>
          <Button component={Link} to="/uslugi" className="nav-button">
              <font size="5" color="darkcyan" face="Impact">Услуги</font>
          </Button>
          <Button component={Link} to="/about" className="nav-button">
              <font size="5" color="darkcyan" face="Impact">О Компании</font>
          </Button>
      </div>
  );
}