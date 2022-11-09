import React from 'react';
import { useSelector } from 'react-redux';
import {
  TableContainer,
  Box,
  CircularProgress,
  TableHead,
  TableBody,
  Table,
  Paper,
  Typography
} from '@mui/material';

import TableRowWithBorder from './TableRowWithBorder';
import HeaderCell from './HeaderCell';
import MainDataTableRow from './MainDataTableRow';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';

const MainDataTable = ({ ahData }) => {
  const filterValue = useSelector((state) => state.filter);
 
  // if filter has value and filtering returns empty array, return this
  if (filterValue && !ahData?.length)
    return (<Typography variant="h3" color="error">Filter didn't match any results!</Typography>);

  return (
    <div>
      {ahData.length > 0 && ahData[0].length > 0 ? (
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRowWithBorder>
                <HeaderCell sx={{ borderRight: '5px solid #082032' }} />
                <HeaderCell sx={{ borderRight: '5px solid #082032', display: { xl: 'block', sm: 'none' }}}>
                  ID
                </HeaderCell>
                <HeaderCell sx={{ borderRight: '5px solid #082032' }}>
                  Item
                </HeaderCell>
                <HeaderCell sx={{ borderRight: '5px solid #082032', display:{ xl: 'block', sm: 'none' } }}>
                  Num of listings
                </HeaderCell>
                <HeaderCell sx={{ borderRight: '5px solid #082032' }}>
                  Lowest buyout
                </HeaderCell>
                <Tooltip title="Calculates average profit for crafting ten items">
                  <HeaderCell>
                    Profit <HelpIcon fontSize="small" />
                  </HeaderCell>
                </Tooltip>
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
