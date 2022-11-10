import React from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CraftingMaterials = () => {
  return (
    <Container sx={{ paddingLeft: '1.2rem', marginBottom: '1.5rem' }}>
      <Typography variant="h5">Materials crafted from:</Typography>
      <Stack sx={{ marginTop: '0.5rem' }} direction="row">
        <Item>test1</Item>
        <Item>test2</Item>
        <Item>test3</Item>
      </Stack>
    </Container>
  )
};

export default CraftingMaterials