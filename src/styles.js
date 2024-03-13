import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({ 
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  button: {
    marginTop: "40px",
  },
  icon: {
    marginRight: "20px",
  },
  text: 
  {
    backgroundColor: theme.palette.common.primary,
  },
}));

export default useStyles;