import React from 'react';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import { styled, tableCellClasses } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import TableRowWithBorder from './TableRowWithBorder';
import HeaderCell from './HeaderCell';
import ShowCurrency from './ShowCurrency';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: 0,
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const TableCellWithoutBorder = styled(TableCell)(({ theme }) => ({
  paddingTop: '1.5rem',
  paddingBottom: '1.5rem',
  fontSize: 16,
  border: 0,
}));

const MainDataTableRow = ({ row }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRowWithBorder hover onClick={() => setOpen(!open)}>
        <TableCellWithoutBorder>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCellWithoutBorder>
        <TableCellWithoutBorder component="th" scope="row">
          {row[0].item.id}
        </TableCellWithoutBorder>
        <TableCellWithoutBorder>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <img
                style={{ height: '40px', width: '40px', borderRadius: '5px' }}
                src={row[0].icon}
                alt=""
              />
            </Grid>
            <Grid item>{row[0].name}</Grid>
          </Grid>
        </TableCellWithoutBorder>
        <TableCellWithoutBorder>{row.length}</TableCellWithoutBorder>
        <TableCellWithoutBorder>
          <ShowCurrency amount={row[0].buyout / row[0].quantity} />
        </TableCellWithoutBorder>
        <TableCellWithoutBorder>Not done</TableCellWithoutBorder>
      </TableRowWithBorder>
      <TableRow>
        <TableCellWithoutBorder style={{ padding: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Typography variant="h4">{row[0].name}</Typography>
            <Table
              sx={{ marginBottom: '2rem' }}
              size="small"
              aria-label="purchases"
            >
              <TableHead>
                <TableRow>
                  <HeaderCell>Name</HeaderCell>
                  <HeaderCell>Bid</HeaderCell>
                  <HeaderCell>Buyout</HeaderCell>
                  <HeaderCell>Buyout per 1</HeaderCell>
                  <HeaderCell>Quantity</HeaderCell>
                  <HeaderCell>Time left</HeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.slice(0, 20).map((item) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell
                      sx={{ border: 0 }}
                      component="th"
                      scope="row"
                    >
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell>
                      <ShowCurrency amount={item.bid} />
                    </StyledTableCell>
                    <StyledTableCell>
                      <ShowCurrency amount={item.buyout} />
                    </StyledTableCell>
                    <StyledTableCell>
                      <ShowCurrency amount={item.buyout / item.quantity} />
                    </StyledTableCell>
                    <StyledTableCell>{item.quantity}</StyledTableCell>
                    <StyledTableCell>{item.time_left}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </TableCellWithoutBorder>
      </TableRow>
    </React.Fragment>
  );
};

export default MainDataTableRow;