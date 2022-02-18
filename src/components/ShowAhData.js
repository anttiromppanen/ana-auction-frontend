import React from 'react';
import { useSelector } from 'react-redux';
import AuctionDataItem from './AuctionDataItem';

const ShowAhData = () => {
  const ahData = useSelector((state) => state.ahData);
  const filterValue = useSelector((state) => state.filter);
  const craftablesData = useSelector((state) => state.craftablesData);
  const craftablesItems = new Map();
  craftablesData.forEach((x) => craftablesItems.set(x.item_id, x.name));

  // item.id
  let ahDataFiltered = ahData.reduce((filtered, option) => {
    const craftableItem = craftablesItems.get(option.item.id);
    if (craftableItem) {
      const item = { ...option, name: craftableItem };
      filtered.push(<AuctionDataItem key={item.id} item={item} />);
    }

    return filtered;
  }, []);

  ahDataFiltered = ahDataFiltered.slice(0, 20);

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
        <tbody>{ahDataFiltered}</tbody>
      </table>
    </div>
  );
};

export default ShowAhData;
