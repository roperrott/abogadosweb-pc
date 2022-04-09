import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  getDocs, collection, orderBy, query, limit,
} from 'firebase/firestore';
import { QueriesCard } from '../QueriesCard';
import { db } from '../../firebase';

export const QueriesScreen = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const getQueries = async () => {
      const queriesTemp = [];
      try {
        const queriesRef = collection(db, 'queries');
        const querySnapshot = await getDocs(query(queriesRef, orderBy('date', 'desc'), limit(10)));
        querySnapshot.forEach(
          (doc) => queriesTemp.push(
            { ...doc.data(), date: doc.data().date.toDate().toDateString(), id: doc.id },
          ),
        );
        setQueries(queriesTemp);
      } catch (e) {
        console.log(e);
      }
    };
    getQueries();
  }, []);

  return (
    <Box>
      {queries.map((e) => (
        <QueriesCard
          key={e.id}
          fullName={`${e.firstName} ${e.lastName}`}
          email={e.mail}
          phone={e.phone}
          query={e.content}
          date={e.date}
        />
      ))}
    </Box>
  );
};
