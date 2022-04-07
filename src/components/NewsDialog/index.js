import {
  Dialog, DialogTitle, DialogContent, TextField, CircularProgress, Button,
} from '@mui/material';
import { useFormik } from 'formik';
import './index.css';

import * as yup from 'yup';
import { useEffect } from 'react';

const validationSchema = yup.object({
  title: yup
    .string('Ingresa un titulo')
    .required('Titulo es un campo requerido'),
  body: yup
    .string('Ingresa un noticia')
    .required('Contenido es un campo requerido'),
});

export const NewsDialog = ({
  open, handleClose, isLoading, onSendData, newsData, onEdit, isEditMode,
}) => {
  const onSubmitData = (values) => {
    if (isEditMode) {
      onEdit(values, newsData.id);
    } else {
      onSendData(values);
    }
  };
  const formik = useFormik({
    initialValues: {
      title: '', body: '',
    },
    validationSchema,
    onSubmit: (values) => onSubmitData(values),
  });

  useEffect(() => {
    if (newsData) {
      formik.setFormikState({ values: newsData });
    } else {
      formik.setFormikState({ values: { title: '', body: '' } });
    }
  }, [newsData]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {isEditMode ? 'Editar' : 'Agregar'}
        {' '}
        Noticia
      </DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit} className="news-form">
          <TextField
            required
            label="Titulo"
            InputLabelProps={{ shrink: false }}
            margin="normal"
            variant="outlined"
            size="normal"
            value={formik?.values?.title}
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
            value={formik?.values?.body}
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
