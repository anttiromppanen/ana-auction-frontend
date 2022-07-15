import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

import { addFavorite, removeFavorite } from '../../services/user';
import { updateFavorites } from '../../reducers/userReducer';

const AddToFavoritesStar = ({ itemID }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const itemInFavorites = user && user.favorites.includes(itemID);
  const [starClicked, setStarClicked] = React.useState(itemInFavorites);

  const handleStarClick = async (e) => {
    // Ignores parent click event
    e.stopPropagation();
    setStarClicked(!starClicked);

    const { favoriteCraftables } = starClicked
      ? await removeFavorite(user.username, itemID)
      : await addFavorite(user.username, itemID);

    dispatch(updateFavorites(favoriteCraftables));
  };

  return (
    <>
      {user && (
        <IconButton onClick={(e) => handleStarClick(e)}>
          {starClicked ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      )}
    </>
  );
};

export default AddToFavoritesStar;
