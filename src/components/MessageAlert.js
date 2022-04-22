import React from 'react';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';

const MessageAlert = ({ message, open, setOpen, error }) => {
  return (
    <Collapse in={open}>
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => setOpen(false)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{ m: 1, marginTop: 0 }}
        variant="filled"
        severity={error ? 'error' : 'success'}
      >
        {message}
      </Alert>
    </Collapse>
  );
};

export default MessageAlert;
