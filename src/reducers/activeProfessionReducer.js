const activeProfessionReducer = (state = 'All items', action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_PROFESSION':
      const newState = action.profession;
      return newState;
    default:
      return state;
  }
};

export const changeActiveProfession = (profession) => {
  return {
    type: 'CHANGE_ACTIVE_PROFESSION',
    profession,
  };
};

export default activeProfessionReducer;
