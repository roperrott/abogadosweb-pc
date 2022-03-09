import { Card, CardContent, Typography } from '@mui/material';

export const QueriesCard = ({
  fullName, email, phone, query, date,
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
  </Card>
);
