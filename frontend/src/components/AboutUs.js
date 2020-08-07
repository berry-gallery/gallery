import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    return <h2> Art of House 
    Place of Beauty  
   Gallery full of Color, Creativity and Love... 
    It is a place to display Fine Arts which contains Painting, Ceramic, Sculpture and Modern Arts (Abstract, Mixed Media, Digital Arts and Acrylic pouring).
   This platform provides an easy way to view the latest artworks and a way to communicate with their owners.
   Soon you will be able to purchase these works through our platform
    </h2>;
  }
}


//more will add about the web site and vision .
