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
import renderDataLogic from '../../utils/sortAndFormatAuctionData';
import profitabilityCalculation from '../../utils/profitabilityCalculation';

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

const ShowAhData = () => {
  const ahData = useSelector((state) => state.ahData);
  const activeProfession = useSelector((state) => state.activeProfession);
  const craftablesData = useSelector((state) => state.craftablesData);
  const [timeFromUpdate, setTimeFromUpdate] = useState('never');
  const craftablesItems = new Map();
  const craftablesSortedByItem = new Map();

  const sortedAndFormattedData = renderDataLogic(
    craftablesData,
    craftablesItems,
    craftablesSortedByItem,
    ahData
  );

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
  console.log(profitabilityCalculation(craftablesData, ahData.auctions));
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
      <MainDataTable ahData={sortedAndFormattedData} />
    </Box>
  );
};

export default ShowAhData;
