import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAlchemy } from '../services/craftables';
import AuctionDataItem from './AuctionDataItem';

const ShowAhData = () => {
  const ahData = useSelector((state) => state.ahData);
  const filterValue = useSelector((state) => state.filter);

  return (
    <div>
      <h1>{filterValue}</h1>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>quantity</th>
            <th>bid</th>
            <th>buyout</th>
            <th>time_left</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default ShowAhData;
