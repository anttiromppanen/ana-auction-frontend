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

  let ahDataFiltered = ahData.reduce((filtered, option) => {
    const craftableItem = craftablesItems.get(option.item.id);
    if (craftableItem) {
      const item = { ...option, name: craftableItem };
      filtered.push(item);
    }

    return filtered;
  }, []);

  ahDataFiltered = ahDataFiltered.slice(0, 20);
  console.log(ahDataFiltered);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="auction house data">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Bid</TableCell>
            <TableCell align="right">Buyout</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Time left</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ahDataFiltered.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.bid}</TableCell>
              <TableCell align="right">{row.buyout}</TableCell>
              <TableCell align="right">{row.time_left}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShowAhData;
