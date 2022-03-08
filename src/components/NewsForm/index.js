import { useContext, useEffect, useState } from 'react';
import {
  Container, Typography, TextField, Button, Alert, Snackbar, CircularProgress,
} from '@mui/material';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';
import { db } from '../../firebase';
import { useValidate } from '../../hooks/useValidateInput';
import { Auth } from '../../context/authContext';

export const NewsForm = () => {
  const classes = useStyles();
  const [formValues, setFormValue] = useState({ title: '', body: '' });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(Auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/login');
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
      await addDoc(collection(db, 'news'), { ...formValues, date: Timestamp.fromDate(new Date()) });
      setShowSuccessAlert(true);
    } catch (e) {
      setShowErrorAlert(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className={classes.formWrapper}>
      <Typography variant="h6">Agregar Noticia</Typography>
      <TextField
        required
        label="Titulo"
        InputLabelProps={{ shrink: false }}
        margin="normal"
        variant="outlined"
        size="normal"
        value={formValues.title}
        name="title"
        onChange={onValueChange}
      />
      <TextField
        required
        multiline
        label="Contenido"
        InputLabelProps={{ shrink: false }}
        margin="normal"
        variant="outlined"
        rows={6}
        value={formValues.body}
        name="body"
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
        ) : 'ENVIAR'}
      </Button>
      <Snackbar
        open={showSuccessAlert}
        autoHideDuration={3000}
      >
        <Alert onClose={() => setShowSuccessAlert(false)} severity="success" sx={{ width: '100%' }}>
          La noticia se subió con éxito
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
