import React, { Component } from "react";

import axios from "axios";


export default class ContactUs extends Component {

  
    constructor(props) {
  
      super(props);
      
      this.state = {
        
      };
    }
  
    componentDidMount() {
      const that = this;
  
      axios
        .get("http://localhost:5000/ContactUs")
        .then((response) => {
          that.setState( response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    render() {
      return <div>
        <h3> House Art of  </h3>
        <h4> Place of Beauty </h4> <br></br>

        Address: Jordan, Amman, Abd Ar-Rahim Al-Hajj Muhammad St.,  <br></br>
     
     <br></br>
     Telephone: +962 7 8740 0732
     Mail : info@artofhouse.com
     </div> ;
     
      
    }
  }
  