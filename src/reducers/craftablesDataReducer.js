import { getAlchemy } from '../services/craftables';

const craftablesDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_BY_ALCHEMY':
      return action.alchemyData;
    default:
      return state;
  }
};

export const filterByAlchemy = () => {
  return async (dispatch) => {
    const alchemyData = await getAlchemy();

    dispatch({
      type: 'FILTER_BY_ALCHEMY',
      alchemyData,
    });
  };
};

export default craftablesDataReducer;
