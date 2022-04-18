import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const MenuButton = ({ color = 'primary', text, urlTo }) => {
  return (
    <Button component={Link} color={color} to={urlTo} size="large">
      {text}
    </Button>
  );
};

export default MenuButton;
