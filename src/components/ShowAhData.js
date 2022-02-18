import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const ShowAhData = () => {
  const ahData = useSelector((state) => state.ahData);
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

  const firstItems = craftablesSortedByBuyout.map((x) => x[0]);
  console.log(firstItems);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="auction house data">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Bid</TableCell>
            <TableCell align="right">Buyout</TableCell>
            <TableCell align="right">Buyout per 1</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Time left</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {firstItems[0] &&
            firstItems.map((item) => (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.bid}</TableCell>
                <TableCell align="right">{item.buyout}</TableCell>
                <TableCell align="right">
                  {item.buyout / item.quantity}
                </TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">{item.time_left}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShowAhData;
