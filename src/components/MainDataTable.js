import React from 'react';
import {
  TableContainer,
  Box,
  styled,
  tableCellClasses,
  Paper,
  CircularProgress,
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
    backgroundColor: '#F9FBFF',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Row = ({ row }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{ '& > *': { borderBottom: 'unset' } }}
        style={{
          boxShadow: open && '-2px 35px 18px -32px rgba(0,0,0,0.14)',
        }}
      >
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
          {row[0].item.id}
        </TableCell>
        <TableCell>{row[0].name}</TableCell>
        <TableCell>{row.length}</TableCell>
        <TableCell>{row[0].buyout / row[0].quantity}</TableCell>
        <TableCell>Not done</TableCell>
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
                  <TableCell>Buyout per 1</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Time left</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.slice(0, 20).map((item) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell>{item.bid}</StyledTableCell>
                    <StyledTableCell>{item.buyout}</StyledTableCell>
                    <StyledTableCell>
                      {item.buyout / item.quantity}
                    </StyledTableCell>
                    <StyledTableCell>{item.quantity}</StyledTableCell>
                    <StyledTableCell>{item.time_left}</StyledTableCell>
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

const MainDataTable = ({ ahData }) => {
  return (
    <div>
      {ahData.length > 0 && ahData[0].length > 0 ? (
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
              {ahData.map((row) => (
                <Row key={row[0].id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
        >
          <div style={{ position: 'relative' }}>
            <span
              style={{
                position: 'absolute',
                top: '50px',
                left: '-40px',
                width: '100vh',
              }}
            >
              Loading AH data...
            </span>
            <CircularProgress />
          </div>
        </Box>
      )}
    </div>
  );
};

export default MainDataTable;
