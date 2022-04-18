import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';

import RefreshIcon from '@mui/icons-material/Refresh';

import MainDataTable from './MainDataTable';

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
  animationIterationCount: 1;
`;

const BlinkedSpan = styled('span')({
  animation: `${blink} 1s linear`,
});

const showLastUpdated = () => {
  if (!window.sessionStorage.getItem('last_modified')) {
    return;
  }

  const lastModified = new Date(
    JSON.parse(window.sessionStorage.getItem('last_modified'))
  );
  const timeNow = new Date();
  const lastModifiedDT = DateTime.fromJSDate(timeNow);
  const timeNowDT = DateTime.fromJSDate(lastModified);
  const finalTimeFormat = lastModifiedDT.diff(timeNowDT, 'minutes').toObject();

  return Math.floor(finalTimeFormat.minutes);
};

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

  const auctions = ahData.auctions || [];

  addFieldsToCraftables(craftablesData, craftablesItems);
  const craftablesKeys = getCraftablesKeys(craftablesItems);
  initializeCraftablesByItem(craftablesSortedByItem, craftablesKeys);
  addItemsToCraftablesByItem(auctions, craftablesItems, craftablesSortedByItem);
  const craftablesSortedByItemValues = getSortedCraftablesValues(
    craftablesSortedByItem
  );
  const sortedItems = sortCraftablesByBuyout(
    getSortedCraftablesValues(craftablesSortedByItemValues)
  );

  if (auctions.length) {
    window.sessionStorage.setItem('sortedAhData', JSON.stringify(sortedItems));
    window.sessionStorage.setItem(
      'last_modified',
      JSON.stringify(ahData['last_modified'])
    );
  }

  return sortedItems;
};

const ShowAhData = () => {
  const ahData = useSelector((state) => state.ahData);
  const activeProfession = useSelector((state) => state.activeProfession);
  const craftablesData = useSelector((state) => state.craftablesData);
  const [timeFromUpdate, setTimeFromUpdate] = useState('never');
  const craftablesItems = new Map();
  const craftablesSortedByItem = new Map();

  useEffect(() => {
    setTimeFromUpdate(showLastUpdated());

    const timer = setInterval(() => {
      setTimeFromUpdate(showLastUpdated());
    }, 60 * 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleUpdate = () => {
    window.sessionStorage.clear();
    window.location.reload();
  };
  return (
    <Box sx={{ marginLeft: '2rem', marginRight: '2rem' }}>
      <Typography variant="h3">{activeProfession.toUpperCase()}</Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <FormGroup>
          <FormControlLabel
            control={<Switch />}
            label="Show crafting materials"
          />
        </FormGroup>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>
            Data updated: <BlinkedSpan>{timeFromUpdate}</BlinkedSpan> minutes
            ago
          </Typography>
          {timeFromUpdate !== 'never' && timeFromUpdate >= 30 ? (
            <Button variant="text" onClick={() => handleUpdate()}>
              <RefreshIcon sx={{ marginRight: 0.5 }} />{' '}
              <span style={{ paddingTop: 1 }}>Update</span>
            </Button>
          ) : null}
        </Stack>
      </Stack>
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
