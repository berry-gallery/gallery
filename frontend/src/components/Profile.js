 import React, { Component } from "react";

//import axios from "axios";

// export default  class Profile extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name:'',
//         email:'',
//         password:'',
//         photo:'',

       
//       };
       
//     }
//     componentDidMount(){
//       document.getElementById('addHyperLink').className = "";
//       document.getElementById('homeHyperlink').className = "";
//       document.getElementById('profileHyperlink').className = "active";
//       this.getProfile();
//     }
//     updateProfile(){
       
//     }
 
//     getProfile(){
//         var self = this;
//   axios.post('/getProfile', {
//   })
//   .then(function (response) {
//     if(response){
//       self.setState({name:response.data.name});
//       self.setState({email:response.data.email});
//       self.setState({password:response.data.password});  
//     }
//   })
//   .catch(function (error) {
//     console.log('error is ',error);
//   });
 
//     }
     
   

//     render() {
//       return (
//         <div className="col-md-5">
//           <div className="form-area">  
//               <form role="form">
//                 <br styles="clear:both" />
//                 <div className="form-group">
//                   <input value={this.state.name} type="text" onChange={this.handleNameChange} className="form-control" placeholder="Name" required />
//                 </div>
//                 <div className="form-group">
//                   <input value={this.state.password} type="password" onChange={this.handlePasswordChange} className="form-control" placeholder="Password" required />
//                 </div>
                
//                 <button type="button" onClick={this.updateProfile} id="submit" name="submit" className="btn btn-primary pull-right">Update</button>
//               </form>
//           </div>
//         </div>
//       )
//     }
// }

 export default class Profile extends Component{
    constructor(props) {
      super(props);
      this.state = {
       
          name: '',
        photo: '',
        contactInfo:{
          mobile:'',
          email:'',
          place:''
        } 
        
      }
    }
    render() {
      return(
        <div className="profile">
          <photo src={this.state.photo} />
          <Profile name={this.state.name} contactInfo={this.state.contactInfo} />
        </div>
      );
    }
  }