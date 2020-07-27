import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:"",  
      email: "",
      password: "",
      mobile:"",
     
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { name, email, password,mobile } = this.state;
    console.log(this.state)
    axios
      .post(
        "http://localhost:5000/signUp",
        {
          user: {
            name:name,  
            email: email,
            password: password,
            mobile:mobile
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
    }
       render(){
      return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <br></br>

          <h2>Sing Up page</h2>
        <br></br>
        <br></br>

        <label for="fullname">Full Name: </label>
        <input
            type="name"
            name="name"
            placeholder="Full Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
                    <br></br>
                    <br></br>

         <label for="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
                    <br></br>
                    <br></br>

           <label for="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
                    <br></br>

          <br></br>
          <label for="mobile">Mobile No.: </label>
          <input
            type="mobile"
            name="mobile"
            placeholder="mobile"
            value={this.state.mobile}
            onChange={this.handleChange}
            required
          />
          <br></br>
          <br></br>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
} 
