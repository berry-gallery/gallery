import React, { Component } from "react";
import axios from "axios";




export default class HomePage extends Component {
  constructor() {
    super();
    this.submitClick = this.submitClick.bind(this);
  }

  submitClick(event) {
    event.preventDefault();
    alert("Searching Result");
  }
  //make req. for data with spasific id
  /* axios
  .get('/data',(req,res)=>{

 
  .then(function (response) 
    console.log(response);
  })
   .catch(function (error) {
    console.log(error);
  });
  });*/

  /*axios
  .get('/data', (req,res)=>{

   data.map((artwork) => {
      console.log(artwork.category);
      console.log("artwork", artwork);
    });
    .then((response) => {
      console.log("hi", response);
    })
    .catch((error) => {
      console.log(" error", error);
    });
  }*/
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
                <li>
                  <a href="home">Home</a>
                </li>
                <li>
                  <a href="aboutus">About Us</a>
                </li>
                <li>
                  <a href="signup">Sign UP</a>
                </li>
                <li>
                  <a href="contact">Contact</a>
                </li>
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
                <a href="Fine Art">Fine Art</a>
              </tr>
              <tr>
                <a href="Sculpting">Sculpting</a>
              </tr>
              <tr>
                <a href="Ceramics">Ceramics</a>
              </tr>
              <tr>
                <a href="Empty">Empty</a>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }

};


export default HomePage;
