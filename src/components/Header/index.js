import {
  AppBar, Typography, Toolbar, Button, Box, Tooltip, IconButton, Menu, MenuItem, Avatar,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Auth } from '../../context/authContext';
import { auth } from '../../firebase';
import { Logo } from '../Logo';

export const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { user } = useContext(Auth);
  const navigate = useNavigate();

  const onLogOut = () => {
    signOut(auth);
    navigate('/login');
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onClickQueries = () => {
    navigate('/consultas');
  };

  const onClickDashboard = () => {
    navigate('/');
  };

  return (
    <AppBar position="relative" color="inherit">
      <Toolbar>
        <Logo />
        {user && (
        <>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={onClickDashboard}
            >
              Noticias
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={onClickQueries}
            >
              Consultas
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={onLogOut}>
                <Typography variant="h4" color="primary" textAlign="center">Cerrar sesion</Typography>
              </MenuItem>

            </Menu>
          </Box>
        </>
        )}
      </Toolbar>
    </AppBar>
  );
};
