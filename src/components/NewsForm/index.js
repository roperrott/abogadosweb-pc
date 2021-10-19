import { useState, useEffect } from 'react';
import {
  Container, Typography, TextField, Button,
} from '@material-ui/core';
import { useStyles } from './styles';

export const NewsForm = () => {
  const classes = useStyles();
  const [formValues, setFormValue] = useState({ title: '', body: '' });

  const validateInput = () => {
    if (!formValues.title || !formValues.body) {
      console.log('valores requeridos');
    }
  };

  useEffect(() => validateInput(), [formValues]);

  const onValueChange = (e) => {
    const { target: { value, name } } = e;
    setFormValue({ ...formValues, [name]: value });
  };

  const onSendData = () => {
    console.log('sent');
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h6">Agregar Noticia</Typography>
      <TextField label="Titulo" size="small" value={formValues.title} onChange={onValueChange} name="title" required margin="normal" />
      <TextField label="Contenido" size="small" value={formValues.body} onChange={onValueChange} name="body" required margin="normal" multiline minRows={4} />
      <Button variant="contained" onClick={onSendData}>Enviar</Button>
    </Container>
  );
};
