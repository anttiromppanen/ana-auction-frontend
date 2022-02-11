import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuctionData } from './reducers/ahDataReducer';
import './App.css';

const App = () => {
  const ahData = useSelector((state) => state.ahData);
  const dispatch = useDispatch();

  const filterSelected = (value) => console.log(value);

  useEffect(() => {
    dispatch(setAuctionData());
  }, [dispatch]);

  console.log(ahData);

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
    </div>
  );
};

export default App;
