import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import MainDataTable from './MainDataTable';

const ShowAhData = () => {
  const ahData = useSelector((state) => state.ahData);
  const activeProfession = useSelector((state) => state.activeProfession);
  const craftablesData = useSelector((state) => state.craftablesData);
  const craftablesItems = new Map();
  craftablesData.forEach((x) => craftablesItems.set(x.item_id, x.name));
  const craftablesItemsKeys = Array.from(craftablesItems.keys());

  const craftablesSortedByItem = new Map();
  craftablesItemsKeys.forEach((x) => craftablesSortedByItem.set(x, []));

  ahData.forEach((x) => {
    const item = craftablesItems.get(x.item.id);
    if (item) {
      craftablesSortedByItem.get(x.item.id).push({ ...x, name: item });
    }
  });

  const craftablesSortedByItemValues = Array.from(
    craftablesSortedByItem.values()
  );

  const craftablesSortedByBuyout = craftablesSortedByItemValues.map((x) =>
    x.sort((a, b) => a.buyout / a.quantity - b.buyout / b.quantity)
  );

  return (
    <Box>
      <h1>{activeProfession}</h1>
      <MainDataTable ahData={craftablesSortedByBuyout} />
    </Box>
  );
};

export default ShowAhData;
