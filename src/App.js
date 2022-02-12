import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuctionData } from './reducers/ahDataReducer';
import { changeFilterValue } from './reducers/filterReducer';
import ShowAhData from './components/ShowAhData';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  const filterSelected = (value) => dispatch(changeFilterValue(value));

  useEffect(() => {
    dispatch(setAuctionData());
  }, [dispatch]);

  return (
    <div>
      <h1>Auction data</h1>
      <div>
        all{' '}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected('ALL')}
        />
        alchemy{' '}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected('ALCHEMY')}
        />
      </div>
      <ShowAhData />
    </div>
  );
};

export default App;
