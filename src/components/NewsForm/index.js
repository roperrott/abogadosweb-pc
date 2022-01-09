import { useState } from 'react';
import {
  Container, Typography, TextField, Button, Alert, Snackbar, CircularProgress,
} from '@mui/material';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useStyles } from './styles';
import { db } from '../../firebase';
import { useValidate } from '../../hooks/useValidateInput';

export const NewsForm = () => {
  const classes = useStyles();
  const [formValues, setFormValue] = useState({ title: '', body: '' });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(false);
    } catch (e) {
      setShowErrorAlert(true);
      setIsLoading(false);
    }
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h6">Agregar Noticia</Typography>
      <TextField label="Titulo" size="small" value={formValues.title} onChange={onValueChange} name="title" required margin="normal" />
      <TextField label="Contenido" size="small" value={formValues.body} onChange={onValueChange} name="body" required margin="normal" multiline minRows={4} />
      {isLoading ? (
        <CircularProgress
          size={30}
          sx={{
            alignSelf: 'center',
          }}
        />
      ) : <Button variant="contained" color="secondary" size="small" onClick={onSendData} disabled={!isValid}>Enviar</Button>}
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
