import { AppBar, Typography, Toolbar } from '@mui/material';
import { Logo } from '../Logo';

export const Header = () => (
  <AppBar position="relative" color="inherit">
    <Toolbar>
      <Logo />
      <Typography variant="h4" component="div" color="primary" sx={{ flexGrow: 1 }}>
        Abogados Web Dashboard
      </Typography>
      <Typography>
        Nombre Usuario
      </Typography>
    </Toolbar>
  </AppBar>
);
