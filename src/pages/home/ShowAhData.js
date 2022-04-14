import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import MainDataTable from './MainDataTable';

const addFieldsToCraftables = (craftablesData, craftablesItems) => {
  craftablesData.forEach((x) =>
    craftablesItems.set(x.item_id, { name: x.name, icon: x.icon || '' })
  );
};

const getCraftablesKeys = (craftablesItems) =>
  Array.from(craftablesItems.keys());

const initializeCraftablesByItem = (craftablesSortedByItem, craftablesKeys) =>
  craftablesKeys.forEach((x) => craftablesSortedByItem.set(x, []));

const addItemsToCraftablesByItem = (
  ahData,
  craftablesItems,
  craftablesSortedByItem
) => {
  ahData.forEach((x) => {
    const item = craftablesItems.get(x.item.id);
    if (item) {
      craftablesSortedByItem
        .get(x.item.id)
        .push({ ...x, name: item.name, icon: item.icon });
    }
  });
};

const getSortedCraftablesValues = (craftablesSortedByItem) =>
  Array.from(craftablesSortedByItem.values());

const sortCraftablesByBuyout = (craftablesSortedByItemValues) =>
  craftablesSortedByItemValues.map((x) =>
    x.sort((a, b) => a.buyout / a.quantity - b.buyout / b.quantity)
  );

const filterSessionData = (craftablesData) => {
  let sessionAhData = JSON.parse(window.sessionStorage.getItem('sortedAhData'));

  const craftablesItemIDs = craftablesData.map((x) => x.item_id);
  let filteredData = sessionAhData.map((x) =>
    x.filter((y) => craftablesItemIDs.includes(y.item.id))
  );
  filteredData = filteredData.filter((x) => x.length);

  return filteredData;
};

const renderDataLogic = (
  craftablesData,
  craftablesItems,
  craftablesSortedByItem,
  ahData
) => {
  if (
    window.sessionStorage.getItem('sortedAhData') &&
    window.sessionStorage.getItem('sortedAhData').length > 0
  ) {
    return filterSessionData(craftablesData);
  }

  addFieldsToCraftables(craftablesData, craftablesItems);
  const craftablesKeys = getCraftablesKeys(craftablesItems);
  initializeCraftablesByItem(craftablesSortedByItem, craftablesKeys);
  addItemsToCraftablesByItem(ahData, craftablesItems, craftablesSortedByItem);
  const craftablesSortedByItemValues = getSortedCraftablesValues(
    craftablesSortedByItem
  );
  const sortedItems = sortCraftablesByBuyout(
    getSortedCraftablesValues(craftablesSortedByItemValues)
  );

  if (ahData.length) {
    window.sessionStorage.setItem('sortedAhData', JSON.stringify(sortedItems));
  }

  return sortedItems;
};

const ShowAhData = () => {
  const ahData = useSelector((state) => state.ahData);
  const activeProfession = useSelector((state) => state.activeProfession);
  const craftablesData = useSelector((state) => state.craftablesData);
  const craftablesItems = new Map();
  const craftablesSortedByItem = new Map();

  return (
    <Box sx={{ marginLeft: '2rem', marginRight: '2rem' }}>
      <Typography variant="h3">{activeProfession.toUpperCase()}</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Switch />}
          label="Show crafting materials"
        />
      </FormGroup>
      <MainDataTable
        ahData={renderDataLogic(
          craftablesData,
          craftablesItems,
          craftablesSortedByItem,
          ahData
        )}
      />
    </Box>
  );
};

export default ShowAhData;
