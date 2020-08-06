import axios from "axios";
import React, { Component } from "react";

class CategoryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      errors: ''
    };
  }
  async componentDidMount() {
    let id = 1; //this should be read from the routing params
    await axios.get("http://localhost:5000/categories/" + id.toString())
    .then((response) => {
      if(response.status === 200 && !response?.data?.error ){
        this.setState({fetching: false, errors: '', category: response?.data?.category});
      }else{
        this.setState({fetching: response.data.error , sending: false});
      }
    }).catch((error) => {
      console.log("error: ", error) ;
      // this.setState({fetching: error , sending: false});
    });
  }

  render() {
    return (<div>hello</div>)
  }
}


export default CategoryDetails
