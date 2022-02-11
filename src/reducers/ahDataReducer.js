import ahDataService from '../services/auctionData';

const ahDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_AUCTION_DATA':
      state = action.data;
      return state;
    default:
      return state;
  }
};

export const setAuctionData = () => {
  return async (dispatch) => {
    const ahData = await ahDataService.getAll();
    dispatch({
      type: 'SET_AUCTION_DATA',
      data: ahData.data,
    });
  };
};

export default ahDataReducer;
