import { useState } from 'react';
import {
  Container, Typography, TextField, Button,
} from '@material-ui/core';
import { useStyles } from './styles';

export const NewsForm = () => {
  const classes = useStyles();
  const [formValues, setFormValue] = useState({ title: '', body: '' });

  const onFormValueChange = (e) => {
    const { target: { value, name } } = e;
    setFormValue({ ...formValues, [name]: value });
  };
  return (
    <Container className={classes.container}>
      <Typography variant="h6">Agregar Noticia</Typography>
      <TextField label="Titulo" size="small" value={formValues.title} onChange={onFormValueChange} name="title" required margin="normal" />
      <TextField label="Contenido" size="small" value={formValues.body} onChange={onFormValueChange} name="body" required margin="normal" multiline minRows={4} />
      <Button variant="contained">Enviar</Button>
    </Container>
  );
};
