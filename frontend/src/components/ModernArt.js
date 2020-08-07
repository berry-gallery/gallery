import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ModernArt extends Component {
  constructor(props) {

    super(props);
    
    this.state = {
      modernArts: [],
    };
  }

  componentDidMount() {
    const that = this;

    axios
      .get("http://localhost:5000/ModernArt/")
      .then((response) => {
        that.setState({ modernArts: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const modernArt = this.state.modernArts;

    return (
      <div>
        <section className="category">
          {modernArt.map(function (ele) {
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