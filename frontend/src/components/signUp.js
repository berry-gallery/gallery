import React, { Component } from "react";
import { connect } from 'react-redux';
import withRoot from '../modules/withRoot';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from '../modules/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppAppBar';
import AppForm from '../modules/views/AppForm';
import { email, required } from '../modules/form/validation';
import RFTextField from '../modules/form/RFTextField';
import FormButton from '../modules/form/FormButton';
import FormFeedback from '../modules/form/FormFeedback';
import {signUp} from "./authService";

const classes = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);

  }

  validate(values){
    const errors = required(
      ['firstName', 'lastName', 'email', 'password'],
      values,
    );

    if (!errors.email) {
      const emailError = email(values.email, values);
      if (emailError) {
        errors.email = email(values.email, values);
      }
    }

    return errors;
  };


  async handleSubmit(values) {
    await this.props.signUp(values);
  };

  render() {
    return (
      <React.Fragment>
        <AppAppBar show={false}/>
        <AppForm>
          <React.Fragment>
            <Typography variant="h3" gutterBottom marked="center" align="center">
              Sign Up
            </Typography>
            <Typography variant="body2" align="center">
              <Link href="/premium-themes/onepirate/sign-in/" underline="always">
                Already have an account?
              </Link>
            </Typography>
          </React.Fragment>
          <Form
            onSubmit={this.handleSubmit}
            subscription={{ submitting: true }}
            validate={this.validate}
          >
            {({ handleSubmit2, submitting }) => (
              <form onSubmit={handleSubmit2} className={classes.form} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      autoFocus
                      component={RFTextField}
                      autoComplete="fname"
                      fullWidth
                      label="First name"
                      name="firstName"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={RFTextField}
                      autoComplete="lname"
                      fullWidth
                      label="Last name"
                      name="lastName"
                      required
                    />
                  </Grid>
                </Grid>
                <Field
                  autoComplete="email"
                  component={RFTextField}
                  disabled={this.props.isSigningUp}
                  fullWidth
                  label="Email"
                  margin="normal"
                  name="email"
                  required
                />
                <Field
                  fullWidth
                  component={RFTextField}
                  disabled={this.props.isSigningUp}
                  required
                  name="password"
                  autoComplete="current-password"
                  label="Password"
                  type="password"
                  margin="normal"
                />
                <FormSpy subscription={{ submitError: true }}>
                  {({ submitError }) =>
                    submitError ? (
                      <FormFeedback className={classes.feedback} error>
                        {submitError}
                      </FormFeedback>
                    ) : null
                  }
                </FormSpy>
                <FormButton
                  className={classes.button}
                  disabled={this.props.isSigningUp}
                  color="secondary"
                  fullWidth
                >
                  {this.props.isSigningUp ? 'In progress…' : 'Sign Up'}
                </FormButton>
              </form>
            )}
          </Form>
        </AppForm>
        <AppFooter />
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => ({...state.auth})

const mapDispatchToProps = (dispatch) => ({
  signUp: (values) => dispatch(signUp(values))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRoot(SignUp));


////////************** */
// import React, { Component } from "react";

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

//           <h2>Sing Up page</h2>
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
