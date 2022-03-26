import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import MainDataTable from './MainDataTable';

const ShowAhData = () => {
  const ahData = useSelector((state) => state.ahData);
  const activeProfession = useSelector((state) => state.activeProfession);
  const craftablesData = useSelector((state) => state.craftablesData);
  const craftablesItems = new Map();
  craftablesData.forEach((x) =>
    craftablesItems.set(x.item_id, { name: x.name, icon: x.icon || '' })
  );
  const craftablesItemsKeys = Array.from(craftablesItems.keys());

  const craftablesSortedByItem = new Map();
  craftablesItemsKeys.forEach((x) => craftablesSortedByItem.set(x, []));

  ahData.forEach((x) => {
    const item = craftablesItems.get(x.item.id);
    if (item) {
      craftablesSortedByItem
        .get(x.item.id)
        .push({ ...x, name: item.name, icon: item.icon });
    }
  });

  const craftablesSortedByItemValues = Array.from(
    craftablesSortedByItem.values()
  );

  const craftablesSortedByBuyout = craftablesSortedByItemValues.map((x) =>
    x.sort((a, b) => a.buyout / a.quantity - b.buyout / b.quantity)
  );

  return (
    <Box sx={{ marginLeft: '2rem', marginRight: '2rem' }}>
      <Typography variant="h3">{activeProfession.toUpperCase()}</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Switch />}
          label="Show crafting materials"
        />
      </FormGroup>
      <MainDataTable ahData={craftablesSortedByBuyout} />
    </Box>
  );
};

export default ShowAhData;
