import axios from "axios";
import React, { Component } from "react";
import ProductCategories from './modules/views/ProductCategories';
class CategoryListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: false,
      categories: []
    }
    this.viewCategory = this.viewCategory.bind(this);
  }
  async componentDidMount() {
    await axios.get("http://localhost:5000/categories")
    .then((response) => {
      if(response.status === 200 && !response?.data?.error ){
        this.setState({fetching: false, errors: '', categories: response?.data?.categories});
      }else{
        this.setState({fetching: response.data.error , sending: false});
      }
    }).catch((error) => {
      this.setState({fetching: error , sending: false});
    });
  }


  viewCategory(categoryId) {
    // fetch Category then navigate to it
    // this.props.navigation.navigate('CategoryView', {id: id}); //navigate with params
  }

  render() {
    return (<ProductCategories images={this.state.categories} viewCategory={(id) => this.viewCategory(id)} />)
  }
}

export default CategoryListing
