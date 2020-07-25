import React, { Component } from "react";
//import logo from "./Logo.png";

class HomePage extends Component {
  constructor() {
    super();
    this.submitClick = this.submitClick.bind(this);
  }

  submitClick(event) {
    event.preventDefault();
    alert("Searching Result");
  }

  render() {
    return (
      <>
        <div className="HomePage">
          <br></br>
          <br></br>
          <form id="search" onSubmit={this.submitClick}>
            {/* <label className="searchL">
              {" "}
              Search By Name
              <input className="searchI" type="search"></input>
              <input
                className="searchBttn"
                type="submit"
                value="Search"
              ></input>
            </label> */}
            <div>
              <ul id="nav">
                <li><a href="home">Home</a></li>
                <li><a href="aboutus">About Us</a></li>
                <li><a href="signup">Sign UP</a></li>
                <li><a href="contact">Contact</a></li>
              </ul>
            </div>
            <br></br>
            <br></br>
            
          </form>
          <table id="category">
            <thead>
              <tr>
                <th id="heder">categories</th>
              </tr>
            </thead>
            <tbody id="body">
              <tr>
                <td id="left">category 1</td>
              </tr>
              <tr>
                <td id="leftC">category 2</td>
              </tr>
              <tr>
                <td id="rightC">category 3</td>
              </tr>
              <tr>
                <td id="right">category 4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default HomePage;
