import { getUniqueProfessions } from '../services/craftables';

const professionsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_PROFESSIONS':
      return action.professions;
    default:
      return state;
  }
};

export const getProfessions = () => {
  return async (dispatch) => {
    const professionsData = await getUniqueProfessions();

    dispatch({
      type: 'GET_PROFESSIONS',
      professions: professionsData,
    });
  };
};

export default professionsReducer;
