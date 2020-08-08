
////////////////////////////********** */

import React, { Component } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";

export default class Famous extends Component {
  constructor(props) {

    super(props);
    
    this.state = {
        famouss: [],
    };
  }

  componentDidMount() {
    const that = this;

    axios
      .get("http://localhost:5000/Famous")
      .then((response) => {
        console.log(response);
      
        that.setState({ famouss: response.data });
      })
      .catch((err) => {
        console.log(err);

      });
      console.log(this.state.famouss)
  }

  render() {
    const famous = this.state.famouss;

    return (
      <div>
        <section className="category">
          {famous.map(function (ele) {
            return (
              <div className="category-card">
                <div className="catergory-image">
                  <img src={ele.img} />
                </div>
                <div className="category-info">
                  
                  <a>title: {ele.title} </a>
                  <br />
                  <a>description:{ele.description}</a>
                  <br />
                  <br />
                  <a>price:{ele.price}</a>
                  <br />
                  <br />
                  <a>category:{ele.category}</a>
                  <br />
  
                </div>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

