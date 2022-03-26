import React from 'react';
import {
  TableContainer,
  Box,
  styled,
  tableCellClasses,
  CircularProgress,
  Collapse,
  IconButton,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Table,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TableRowWithBorder from './TableRowWithBorder';
import currencyFormatting from '../utils/currencyFormatting';
import ShowCurrency from './ShowCurrency';

const HeaderCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textTransform: 'uppercase',
  fontSize: 18,
  border: 0,
}));

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

const Row = ({ row }) => {
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

const MainDataTable = ({ ahData }) => {
  return (
    <div>
      {ahData.length > 0 && ahData[0].length > 0 ? (
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRowWithBorder>
                <HeaderCell sx={{ borderRight: '5px solid #082032' }} />
                <HeaderCell sx={{ borderRight: '5px solid #082032' }}>
                  ID
                </HeaderCell>
                <HeaderCell sx={{ borderRight: '5px solid #082032' }}>
                  Item
                </HeaderCell>
                <HeaderCell sx={{ borderRight: '5px solid #082032' }}>
                  Num of listings
                </HeaderCell>
                <HeaderCell sx={{ borderRight: '5px solid #082032' }}>
                  Lowest buyout
                </HeaderCell>
                <HeaderCell>Profitable to craft</HeaderCell>
              </TableRowWithBorder>
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
