import { AppBar, Typography, Toolbar} from '@material-ui/core';
import { Logo } from '../Logo';

export const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Logo/>
                <Typography variant='h5' sx={{ flexGrow: 1 }}>
                    Dashboard 
                </Typography>
                <Typography>
                    Nombre Usuario
                </Typography>
            </Toolbar>
        </AppBar>
    );
}