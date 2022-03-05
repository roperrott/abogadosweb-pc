import { useContext, useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  Container, Typography, TextField, Button, Alert, Snackbar, CircularProgress,
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
    <Container className={classes.loginWrapper}>
      <Typography variant="h6">Inicie sesion</Typography>
      <TextField label="Usuario" size="small" value={formValues.user} onChange={onValueChange} name="user" required margin="normal" />
      <TextField label="Contraseña" size="small" value={formValues.password} onChange={onValueChange} name="password" required margin="normal" />
      {isLoading ? (
        <CircularProgress
          size={30}
          sx={{
            alignSelf: 'center',
          }}
        />
      ) : <Button variant="contained" onClick={onSendData} disabled={!isValid}>Ingresar</Button>}
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
    </Container>
  );
};
