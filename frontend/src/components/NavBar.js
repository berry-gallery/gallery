import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//import IconButton from "@material-ui/core/IconButton";
//import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    secondary: {
      light: "#ab003c",
      main: "#ab003c",
      dark: "#ab003c",
      contrastText: "#000",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#ab003c',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display:'flex',
    justifyContent:'flex-start'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className={classes.root}>
          <Button color="inherit" href="AboutUs" className={classes.title}>
            About Us
          </Button>
          <Button color="inherit" href="ContactUs" className={classes.title}>
            contact Us
          </Button>
          <Button color="inherit" href="SignIn">
            Sign In
          </Button>
          <Button color="inherit" href="SignUp">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
