 import React, { Component } from "react";

import axios from "axios";


export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
    
  }

  editItem = event => {
    event.preventDefault();
    this.props.history.push(`/Profile/${this.state.id}`);
  } 


  updateInput = input => {
    axios.put(`http://localhost:5000/Profile`,{
      name:"",
      email: "",
      password:"",
      mobile:"" ,
      location:"",
      img:"",
      category:""
     
        })
        .then((res) => {
          console.log(res.input);      
        })
        .catch((err) => {
          console.log(err);
        })
      
              
 
      // .then(res => {
      //   this.setState({items: res.data});
      //   this.props.history.push('/Profile');
      // })
      // .catch(err => console.log(err));
  }
render(){
  return(
    <div>
    <form onSubmit={this.handleSubmit}>
      <br></br>

      <h2>Profile Page</h2>


      <br></br>
      <br></br>
 <label for="fullname">Full Name: </label>
          <input
            type="name"
            name="name"
            placeholder="Full Name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
      
      <br></br>
      <br></br>

      <label for="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <br></br>
          <br></br>
          <label for="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <br></br>

          <br></br>
          <label for="mobile">Mobile No. : </label>
          <input
            type="mobile"
            name="mobile"
            placeholder="mobile"
            value={this.state.mobile}
            onChange={this.handleChange}
            required
          />
          <br></br>
          <br></br>
          <label for="label"> location: </label>{" "}
          <select
            type="string"
            id="location"
            
            placeholder="choose your location"
            name="location"
           
          >
            <option>Jordan</option>
            <option>Egypt</option>
            <option>Tunisa</option>
            <option>sudan</option>
            <option>Qatar</option>
            <option>morocco</option>
            <option>Libya</option>
            <option>Lebanon</option>
            <option>Palestine</option>
            <option>Iraq</option>
            <option>syria</option>
            <option>somalia</option>
            <option>Yemen</option>
            <option>Bahrain</option>
            <option>oman</option>
            <option>Algeria</option>
          </select>
          


 
          <br></br>
      <br></br>
      <label for="label"> Catogery: </label>{" "}
          <select
            type="string"
            id="Catogery"
            
            placeholder="choose  your catogery"
            name="location"
           
          >
            <option>Ceramic</option>
            <option>Sculpture</option>
            <option>Painting</option>
            <option>Modern Art</option>
           
          </select>


          <br></br>
      <br></br>
      <button type="submit">Save</button><br></br>
      <button type="edit">Edit</button>
      <Button onClick={this.editItem}>Edit item</Button>
      <Button onClick={this.saveElement}>Save</Button>

    </form>
  </div>


 

    );
    }

}





// // export default  class Profile extends Component {
//

//     constructor(props) {
// //       super(props);
// //       this.state = {
// //         name:'',
// //         email:'',
// //         password:'',
// //         photo:'',

       
// //       };
       
// //     }
// //     componentDidMount(){
// //       document.getElementById('addHyperLink').className = "";
// //       document.getElementById('homeHyperlink').className = "";
// //       document.getElementById('profileHyperlink').className = "active";
// //       this.getProfile();
// //     }
// //     updateProfile(){
       
// //     }
 
// //     getProfile(){
// //         var self = this;
// //   axios.post('/getProfile', {
// //   })
// //   .then(function (response) {
// //     if(response){
// //       self.setState({name:response.data.name});
// //       self.setState({email:response.data.email});
// //       self.setState({password:response.data.password});  
// //     }
// //   })
// //   .catch(function (error) {
// //     console.log('error is ',error);
// //   });
 
// //     }
     
   

// //     render() {
// //       return (
// //         <div className="col-md-5">
// //           <div className="form-area">  
// //               <form role="form">
// //                 <br styles="clear:both" />
// //                 <div className="form-group">
// //                   <input value={this.state.name} type="text" onChange={this.handleNameChange} className="form-control" placeholder="Name" required />
// //                 </div>
// //                 <div className="form-group">
// //                   <input value={this.state.password} type="password" onChange={this.handlePasswordChange} className="form-control" placeholder="Password" required />
// //                 </div>
                
// //                 <button type="button" onClick={this.updateProfile} id="submit" name="submit" className="btn btn-primary pull-right">Update</button>
// //               </form>
// //           </div>
// //         </div>
// //       )
// //     }
// // }

//  export default class Profile extends Component{
//     constructor(props) {
//       super(props);
//       this.state = {
       
//           name: '',
//         photo: '',
//         contactInfo:{
//           mobile:'',
//           email:'',
//           place:''
//         } 
        
//       }
//     }
//     render() {
//       return(
//         <div className="profile">
//           <photo src={this.state.photo} />
//           <Profile name={this.state.name} contactInfo={this.state.contactInfo} />
//         </div>
//       );
//     }
  