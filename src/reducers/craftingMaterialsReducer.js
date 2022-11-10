const craftingMaterialsReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_MATERIALS':
      return action.value;
    default:
      return state;
  }
};

export const toggleShowMaterials = (value) => {
  return {
    type: 'TOGGLE_SHOW_MATERIALS',
    value,
  };
};

export default craftingMaterialsReducer;