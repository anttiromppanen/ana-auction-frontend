import React from 'react';
import {
  TableContainer,
  Box,
  CircularProgress,
  TableHead,
  TableBody,
  Table,
  Paper,
} from '@mui/material';

import TableRowWithBorder from './TableRowWithBorder';
import HeaderCell from './HeaderCell';
import MainDataTableRow from './MainDataTableRow';

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
                <HeaderCell>Profit</HeaderCell>
              </TableRowWithBorder>
            </TableHead>
            <TableBody>
              {ahData.map((row) => (
                <MainDataTableRow key={row[0].id} row={row} />
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
