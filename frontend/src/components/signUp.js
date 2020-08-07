


// //////************** */
// import React, { Component } from "react";
// import axios from "axios";
// //import mongoose from "mongoose"

// export default class SignUp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       // name: "",
//       // email: "",
//       // password: "",
//       // mobile: "",
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event) {
//    // console.log( event.target.value,"value")
//   //  console.log( event.target.name,"name")
//     this.state[event.target.name]= event.target.value 
//    // console.log(this.state)
//     this.setState(this.state)

//   }

//   handleSubmit(event) {
//     //console.log(this.state)
    
//     var that = this

//     axios
//       .post("http://localhost:5000/signUp",that.state )

//       .then((response) => {
//         console.log("hi", response);
//       })
//       .catch((error) => {
//         console.log("registration error", error);
//       });

//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <br></br>

//           <h2>Sign Up page</h2>
//           <br></br>
//           <br></br>

//           <label for="fullname">Full Name: </label>
//           <input
//             type="name"
//             name="name"
//             placeholder="Full Name"
//             value={this.state.name}
//             onChange={this.handleChange}
//             required
//           />
//           <br></br>
//           <br></br>

//           <label for="email">Email: </label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={this.state.email}
//             onChange={this.handleChange}
//             required
//           />
//           <br></br>
//           <br></br>

//           <label for="password">Password: </label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={this.state.password}
//             onChange={this.handleChange}
//             required
//           />
//           <br></br>

//           <br></br>
//           <label for="mobile">Mobile No.: </label>
//           <input
//             type="mobile"
//             name="mobile"
//             placeholder="mobile"
//             value={this.state.mobile}
//             onChange={this.handleChange}
//             required
//           />
//           <br></br>
//           <br></br>

//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     );
//   }
// }
 /////******* */ 

 import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      
      <Link color="inherit" href="https://material-ui.com/">
        HOUSE OF ART
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}