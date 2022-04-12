import {
  Button, Card, CardActions, CardContent, Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

export const QueriesCard = ({
  fullName, email, phone, query, date, id, onPressDelete,
}) => (
  <Card className="MuiQueryCard">
    <CardContent>
      <Typography color="text.secondary" gutterBottom>
        {fullName}
        <Typography variant="body2" gutterBottom>{new Date(date).toLocaleDateString()}</Typography>
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        E-Mail:
      </Typography>
      <Typography variant="body2">{email}</Typography>
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        Telefono:
      </Typography>
      <Typography variant="body2" gutterBottom>{phone}</Typography>
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        Consulta:
      </Typography>
      <Typography variant="body2">
        {query}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="secondary" onClick={() => onPressDelete(id)}>
        <DeleteIcon size="small" />
        Eliminar
      </Button>
    </CardActions>
  </Card>
);
