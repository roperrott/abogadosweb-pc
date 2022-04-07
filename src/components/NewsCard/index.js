import {
  Card, CardActionArea, CardContent, Typography, CardActions, Button,
} from '@mui/material';

export const NewsCard = ({
  id, title, content, onPressDelete, onPressEdit,
}) => (
  <Card sx={{ bgcolor: 'primary.main' }}>
    <CardActionArea>
      {/* <CardMedia
        component="img"
        height="140"
        image={img}
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="secondary" onClick={() => onPressEdit({ id, title, body: content })}>
        Editar
      </Button>
      <Button size="small" color="secondary" onClick={() => onPressDelete(id)}>
        Eliminar
      </Button>
    </CardActions>
  </Card>
);
