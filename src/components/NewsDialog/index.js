import {
  Dialog, DialogTitle, DialogContent, TextField, CircularProgress, Button,
} from '@mui/material';
import { useFormik } from 'formik';
import './index.css';

import * as yup from 'yup';

const validationSchema = yup.object({
  title: yup
    .string('Ingresa un titulo')
    .required('Titulo es un campo requerido'),
  body: yup
    .string('Ingresa un noticia')
    .required('Contenido es un campo requerido'),
});

export const NewsDialog = ({
  open, handleClose, isLoading, onSendData,
}) => {
  const formik = useFormik({
    initialValues: {
      title: '', body: '',
    },
    validationSchema,
    onSubmit: (values) => onSendData(values),
  });
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Agregar Noticia</DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit} className="news-form">
          <TextField
            required
            label="Titulo"
            InputLabelProps={{ shrink: false }}
            margin="normal"
            variant="outlined"
            size="normal"
            value={formik.title}
            name="title"
            onChange={formik.handleChange}
          />
          <TextField
            required
            multiline
            label="Contenido"
            InputLabelProps={{ shrink: false }}
            margin="normal"
            variant="outlined"
            rows={6}
            value={formik.body}
            name="body"
            onChange={formik.handleChange}
          />
          <Button color="secondary" variant="contained" size="medium" type="submit">
            {isLoading ? (
              <CircularProgress
                size={30}
                sx={{
                  alignSelf: 'center',
                }}
              />
            ) : 'ENVIAR'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
