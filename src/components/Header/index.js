import {
  AppBar, Typography, Toolbar, Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { Auth } from '../../context/authContext';
import { auth } from '../../firebase';
import { Logo } from '../Logo';

export const Header = () => {
  const { user } = useContext(Auth);
  const navigate = useNavigate();
  const onLogOut = () => {
    signOut(auth);
    navigate('/login');
  };

  return (
    <AppBar position="relative" color="inherit">
      <Toolbar>
        <Logo />
        <Typography variant="h4" component="div" color="primary" sx={{ flexGrow: 1 }}>
          Abogados Web Dashboard
        </Typography>
        {user && (
        <>
          <Typography variant="h7">
            {user?.email}
          </Typography>
          <Button onClick={onLogOut}>
            Cerrar sesion
          </Button>

        </>
        )}
      </Toolbar>
    </AppBar>
  );
};
