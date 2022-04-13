import { useContext, useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  Typography, TextField, Button, Alert, Snackbar, CircularProgress, Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';
import { useValidate } from '../../hooks/useValidateInput';
import { auth } from '../../firebase';
import { Auth } from '../../context/authContext';

export const LoginForm = () => {
  const classes = useStyles();
  const [formValues, setFormValue] = useState({ user: '', password: '' });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(Auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const isValid = useValidate(formValues);

  const onValueChange = (e) => {
    const { target: { value, name } } = e;
    setFormValue({ ...formValues, [name]: value });
  };

  const onSendData = async () => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, formValues.user, formValues.password);
      navigate('/');
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Paper className={classes.loginWrapper} elevation={4}>
      <Typography variant="h6">INICIAR SESION</Typography>
      <TextField
        required
        label="email"
        InputLabelProps={{ shrink: false }}
        margin="normal"
        variant="outlined"
        size="normal"
        name="user"
        value={formValues.user}
        onChange={onValueChange}
      />
      <TextField
        required
        type="password"
        label="Contraseña"
        InputLabelProps={{ shrink: false }}
        margin="normal"
        variant="outlined"
        size="normal"
        name="password"
        value={formValues.password}
        onChange={onValueChange}
      />
      <Button color="secondary" variant="contained" size="medium" disabled={!isValid} onClick={onSendData}>
        {isLoading ? (
          <CircularProgress
            size={30}
            sx={{
              alignSelf: 'center',
            }}
          />
        ) : 'INGRESAR'}
      </Button>
      <Snackbar
        open={showSuccessAlert}
        autoHideDuration={3000}
      >
        <Alert onClose={() => setShowSuccessAlert(false)} severity="success" sx={{ width: '100%' }}>
          Se ingreso correctamente
        </Alert>
      </Snackbar>
      <Snackbar
        open={showErrorAlert}
        autoHideDuration={3000}
      >
        <Alert onClose={() => setShowErrorAlert(false)} severity="error" sx={{ width: '100%' }}>
          Hubo un error
        </Alert>
      </Snackbar>
    </Paper>
  );
};
