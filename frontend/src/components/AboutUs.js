import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
import Typography from "@material-ui/core/Typography";

export default class AboutUs extends Component {

  
    constructor(props) {
  
      super(props);
      
      this.state = {
        
      };
    }
  
    componentDidMount() {
      const that = this;
  
      axios
        .get("http://localhost:5000/AboutUs")
        .then((response) => {
          that.setState( response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  


  render() {
    return <div>
      <h1> House Art of  </h1>
      <h2> Place of Beauty </h2> <br></br>
         Gallery full of Color, Creativity and Love... <br></br>
    It is a place to display Fine Arts which contains Painting, Ceramic, Sculpture<br></br>
     and Modern Arts (Abstract, Mixed Media, Digital Arts and Acrylic pouring).<br></br>
   This platform provides an easy way to view the latest artworks and a way to communicate with their owners.
   <br></br>
   Soon you will be able to purchase these works through our platform
   </div> ;
    
  }
}


//more will add about the web site and vision .
