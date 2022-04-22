import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const MenuButton = ({ color = 'primary', text, urlTo, startIcon, endIcon }) => {
  return (
    <Button
      component={Link}
      startIcon={startIcon}
      endIcon={endIcon}
      color={color}
      to={urlTo}
      size="large"
    >
      {text}
    </Button>
  );
};

export default MenuButton;
