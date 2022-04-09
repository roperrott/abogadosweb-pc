import {
  Card, CardActionArea, CardContent, Typography, CardActions, Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutline';

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
        <EditIcon fontSize="small" />
        Editar
      </Button>
      <Button size="small" color="secondary" onClick={() => onPressDelete(id)}>
        <DeleteIcon size="small" />
        Eliminar
      </Button>
    </CardActions>
  </Card>
);
