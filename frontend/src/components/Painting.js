import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Painting extends Component {
  constructor(props) {

    super(props);
    
    this.state = {
      paintings: [],
    };
  }

  componentDidMount() {
    const that = this;

    axios
      .get("http://localhost:5000/Painting/")
      .then((response) => {
        that.setState({ paintings: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const painting = this.state.paintings;

    return (
      <div>
        <section className="category">
          {painting.map(function (ele) {
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