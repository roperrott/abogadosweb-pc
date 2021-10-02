import {Container, Typography, TextField, Button} from '@material-ui/core'
import { useStyles } from './styles';


export const NewsForm = () => {
    const classes = useStyles();
    return(
        <Container className={classes.container}>
            <Typography variant={'h6'}>Agregar Noticia</Typography>
            <TextField label={'Titulo'} size={'small'} required margin={'normal'}/>
            <TextField label={'Contenido'} size={'small'} required margin={'normal'} multiline minRows={4}/>
            <Button variant={'contained'}>Enviar</Button>
        </Container>
    );
};