import { useContext, useEffect, useState } from 'react';
import { Button, Alert, Snackbar } from '@mui/material';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { Auth } from '../../context/authContext';
import { NewsDialog } from '../NewsDialog';

export const NewsForm = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(Auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/login');
    }
  }, [navigate, user]);

  const onSendData = async (formValues) => {
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

  const onHandleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button variant="contained" onClick={onHandleClose}>Agregar noticia</Button>
      <NewsDialog
        open={open}
        handleClose={onHandleClose}
        isLoading={isLoading}
        onSendData={onSendData}
      />
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
    </>
  );
};
