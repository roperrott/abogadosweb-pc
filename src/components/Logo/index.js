import logo from '../../assets/logo.svg';
import { useStyles } from './styles';

export const Logo = () => {
  const classes = useStyles();
  return (
    <img src={logo} className={classes.logo} alt="logo" />
  );
};
