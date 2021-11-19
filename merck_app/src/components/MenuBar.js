import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';

import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            MERCK RFID
          </Typography>
          <Stack direction="row" spacing={1}>
          <Button color="inherit">Home</Button>
          <Tooltip TransitionComponent={Zoom} title="Login">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* login button */}
            <AccountCircleIcon />
          </IconButton>
            </Tooltip>
          
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
