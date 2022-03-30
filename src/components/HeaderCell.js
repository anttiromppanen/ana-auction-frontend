import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material';
 
const HeaderCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textTransform: 'uppercase',
  fontSize: 18,
  border: 0,
}));

export default HeaderCell