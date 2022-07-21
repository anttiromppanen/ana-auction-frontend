import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { addFavorite, removeFavorite } from '../../services/user';
import { updateFavorites, setUser } from '../../reducers/userReducer';
import { showFavorites } from '../../reducers/craftablesDataReducer';

const AddToFavoritesStar = ({ itemID }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const user = useSelector((state) => state.user);
  const itemInFavorites =
    user && user.favorites.find((item) => item._id === itemID);
  const [starClicked, setStarClicked] = React.useState(itemInFavorites);

  const handleStarClick = async (e) => {
    // Ignores parent click event
    e.stopPropagation();
    setStarClicked(!starClicked);

    const newUser = starClicked
      ? await removeFavorite(user.username, itemID, pathname)
      : await addFavorite(user.username, itemID);

    if (pathname === '/favorites') {
      dispatch(showFavorites(newUser.favoriteCraftables));
    }

    dispatch(updateFavorites(newUser.favoriteCraftables));

    const response = dispatch(
      setUser({ ...user, favorites: newUser.favoriteCraftables })
    );
    window.localStorage.setItem('user', JSON.stringify(response.user));
  };

  return (
    <>
      {user && (
        <IconButton onClick={(e) => handleStarClick(e)}>
          {pathname === '/favorites' ? (
            <RemoveCircleIcon color="error" />
          ) : starClicked ? (
            <StarIcon />
          ) : (
            <StarBorderIcon color="secondary" />
          )}
        </IconButton>
      )}
    </>
  );
};

export default AddToFavoritesStar;
