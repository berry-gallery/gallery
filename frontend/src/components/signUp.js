import React, { Component } from "react";
import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // name: "",
      // email: "",
      // password: "",
      // mobile: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log( event.target.value,"value")
    console.log( event.target.name,"name")
    this.state[event.target.name]=event.target.value 
    console.log(this.state)
    this.setState(this.state)

    // this.setState({
    // name: event.target.value,
    //   email: event.target.value,
    //   password: event.target.value,
    //   mobile: event.target.value,
    // });
  }

  handleSubmit(event) {
    console.log(this.state)
    // const user = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   password: this.state.password,
    //   mobile: this.state.mobile,
    // };
    //console.log(this.state)
    var that = this
    axios
      .post("http://localhost:5000/signUp",that.state )

      .then((response) => {
        console.log("hi", response);
      })
      .catch((error) => {
        console.log("registration error", error);
      });

    event.preventDefault();
  }

  render() {
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
