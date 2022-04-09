import { useContext, useEffect, useState } from 'react';
import {
  Alert, Snackbar, Box, Fab,
} from '@mui/material';
import {
  addDoc, collection, deleteDoc, doc, getDocs, limit, orderBy, query, Timestamp, updateDoc,
} from 'firebase/firestore';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { Auth } from '../../context/authContext';
import { NewsDialog } from '../NewsDialog';

import './styles.css';
import { NewsCard } from '../NewsCard';

export const NewsForm = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newsIsLoading, setNewsIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [newsToEdit, setNewsToEdit] = useState();
  const [isEditMode, setIsEditMode] = useState(false);
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
      setOpen(false);
    }
  };

  const getNews = async () => {
    setNewsIsLoading(true);
    try {
      const newsTemp = [];
      const querySnapshot = await getDocs(query(collection(db, 'news'), orderBy('date', 'desc'), limit(5)));
      querySnapshot.forEach(
        (document) => newsTemp.push(
          {
            ...document.data(),
            date: document.data().date.toDate().toDateString(),
            id: document.id,
          },
        ),
      );
      setNews(newsTemp);
    } catch {
      setNewsIsLoading(false);
    }
    setNewsIsLoading(false);
  };

  const onEditNews = async (formValues, id) => {
    setIsLoading(true);
    try {
      const docRef = doc(db, 'news', id);
      await updateDoc(docRef,
        { title: formValues.title, body: formValues.body });
      setShowSuccessAlert(true);
      getNews();
    } catch (e) {
      setShowErrorAlert(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };

  const onDeleteNews = async (id) => {
    const docRef = doc(db, 'news', id);
    try {
      await deleteDoc(docRef);
      getNews();
    } catch {
      setShowErrorAlert(true);
    }
  };

  const onDelete = (id) => {
    if (window.confirm('Desea eliminar la noticia?')) {
      onDeleteNews(id);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const onHandleClose = () => {
    setIsEditMode(false);
    setNewsToEdit();
    setOpen(!open);
  };

  const onOpenEditDialog = async ({ id, title, body }) => {
    setOpen(true);
    setIsEditMode(true);
    setNewsToEdit({ id, title, body });
  };

  return (
    <Box>
      <Fab
        variant="extended"
        sx={{
          position: 'fixed',
          zIndex: 999,
          right: 20,
          bottom: 40,
        }}
        onClick={onHandleClose}
      >
        <AddIcon />
        Agregar noticia

      </Fab>
      {news.length > 0 && !newsIsLoading && news.map(({ id, title, body }) => (
        <NewsCard
          key={id}
          id={id}
          title={title}
          content={body}
          onPressEdit={onOpenEditDialog}
          onPressDelete={onDelete}
        />
      ))}
      <NewsDialog
        open={open}
        handleClose={onHandleClose}
        isLoading={isLoading}
        onSendData={onSendData}
        newsData={newsToEdit}
        isEditMode={isEditMode}
        onEdit={onEditNews}
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
    </Box>
  );
};
