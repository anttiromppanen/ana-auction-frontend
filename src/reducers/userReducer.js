const userReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.user;
    case 'UPDATE_FAVORITES':
      return { ...state, favorites: action.favorites };
    default:
      return state;
  }
};

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user,
  };
};

export const updateFavorites = (favorites) => {
  return {
    type: 'UPDATE_FAVORITES',
    favorites,
  };
};

export default userReducer;
