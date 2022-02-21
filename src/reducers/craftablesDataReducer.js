import {
  getAlchemy,
  getTailoring,
  getCraftablesByProfessionName,
} from '../services/craftables';

const craftablesDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'FILTER_BY_ALCHEMY':
      return action.alchemyData;
    case 'FILTER_BY_TAILORING':
      return action.tailoringData;
    case 'FILTER_BY_PROFESSION':
      return action.craftingData;
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

export const filterByTailoring = () => {
  return async (dispatch) => {
    const tailoringData = await getTailoring();

    dispatch({
      type: 'FILTER_BY_TAILORING',
      tailoringData,
    });
  };
};

export const filterByProfessionName = (professionName) => {
  return async (dispatch) => {
    const craftingData = await getCraftablesByProfessionName(professionName);
    console.log(craftingData);

    dispatch({
      type: 'FILTER_BY_PROFESSION',
      craftingData,
    });
  };
};

export default craftablesDataReducer;
