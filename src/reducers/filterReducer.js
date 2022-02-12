const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return action.value;
    default:
      return state;
  }
};

export const changeFilterValue = (value) => {
  return {
    type: 'CHANGE_VALUE',
    value,
  };
};

export default filterReducer;
