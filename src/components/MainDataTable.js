import React from 'react';
import {
  TableContainer,
  styled,
  tableCellClasses,
  Paper,
  Collapse,
  IconButton,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Table,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const createData = (id, name, listings, lowestBuyout) => {
  return {
    id,
    name,
    listings,
    lowestBuyout,
    history: [
      {
        id: 1,
        name: 'Flask',
        bid: 555,
        buyout: 12345,
        time_left: 'max',
      },
      {
        id: 2,
        name: 'Flask',
        bid: 555,
        buyout: 12345,
        time_left: 'max',
      },
      {
        id: 3,
        name: 'Flask',
        bid: 555,
        buyout: 12345,
        time_left: 'max',
      },
      {
        id: 5,
        name: 'Flask',
        bid: 555,
        buyout: 12345,
        time_left: 'max',
      },
    ],
  };
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#FAFAFA',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.listings}</TableCell>
        <TableCell>{row.lowestBuyout}</TableCell>
        <TableCell>No</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Bid</TableCell>
                  <TableCell>Buyout</TableCell>
                  <TableCell>Time left</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.history.map((historyRow) => (
                  <StyledTableRow key={historyRow.id}>
                    <StyledTableCell component="th" scope="row">
                      {historyRow.name}
                    </StyledTableCell>
                    <StyledTableCell>{historyRow.bid}</StyledTableCell>
                    <StyledTableCell>{historyRow.buyout}</StyledTableCell>
                    <StyledTableCell>{historyRow.time_left}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

const rows = [
  createData(1, 'Flask1', 150, 50),
  createData(2, 'Flask2', 200, 150),
  createData(3, 'Flask3', 350, 500),
  createData(4, 'Flask4', 25, 60),
  createData(5, 'Flask5', 600, 666),
];

const MainDataTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Num of listings</TableCell>
            <TableCell>Lowest buyout</TableCell>
            <TableCell>Profitable to craft</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainDataTable;
