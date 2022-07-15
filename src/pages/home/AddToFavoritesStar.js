import React from 'react';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const AddToFavoritesStar = () => {
  const [starClicked, setStarClicked] = React.useState(false);

  const handleStarClick = (e) => {
    setStarClicked(!starClicked);
    e.stopPropagation();
  };

  return (
    <IconButton onClick={(e) => handleStarClick(e)}>
      {starClicked ? <StarIcon /> : <StarBorderIcon />}
    </IconButton>
  );
};

export default AddToFavoritesStar;
