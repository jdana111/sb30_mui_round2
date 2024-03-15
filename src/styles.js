import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  console.log(theme.palette);
  return {
    container: {
      backgroundColor: theme.palette.error.main,
      padding: theme.spacing(8, 0, 6),
    },
    button: {
      marginTop: "40px",
    },
    icon: {
      marginRight: "20px",
    },
    text: {
      backgroundColor: theme.palette.common.primary,
    },
    cardGrid: {
      padding: "20px 0",
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%",
    },
    cardContent: {
      flexGrow: 1,
    },
  };
});

export default useStyles;
