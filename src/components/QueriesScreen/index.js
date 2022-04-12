import { Box, Typography, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  getDocs, collection, orderBy, query, limit, doc, deleteDoc,
} from 'firebase/firestore';
import { QueriesCard } from '../QueriesCard';
import { db } from '../../firebase';

export const QueriesScreen = () => {
  const [queries, setQueries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getQueries = async () => {
    setIsLoading(true);
    const queriesTemp = [];
    try {
      const queriesRef = collection(db, 'queries');
      const querySnapshot = await getDocs(query(queriesRef, orderBy('date', 'desc'), limit(10)));
      querySnapshot.forEach(
        (document) => queriesTemp.push(
          {
            ...document.data(),
            date: document.data().date.toDate().toDateString(),
            id: document.id,
          },
        ),
      );
      setQueries(queriesTemp);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getQueries();
  }, []);

  const onDeleteQuery = async (id) => {
    const docRef = doc(db, 'queries', id);
    try {
      await deleteDoc(docRef);
      getQueries();
    } catch (e) {
      console.log(e);
    }
  };

  const onDelete = (id) => {
    if (window.confirm('Desea eliminar la consulta?')) {
      onDeleteQuery(id);
    }
  };

  if (isLoading) {
    return (
      <CircularProgress
        size={30}
        sx={{
          alignSelf: 'center',
        }}
      />
    );
  }

  return (
    <Box>
      {queries.length > 0 ? queries.map((e) => (
        <QueriesCard
          key={e.id}
          id={e.id}
          fullName={`${e.firstName} ${e.lastName}`}
          email={e.mail}
          phone={e.phone}
          query={e.content}
          date={e.date}
          onPressDelete={onDelete}
        />
      )) : (
        <Typography
          variant="h2"
          color="secondary"
          sx={{ pt: '200px', textAlign: 'center' }}
        >
          Aún no hay consultas.
        </Typography>
      ) }
    </Box>
  );
};
