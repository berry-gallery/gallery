import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import  ButtonAppBar from './components/NavBar';

import HomePage from './components/HomePage' ;
import SignUp from './components/SignUp' ;
import SignIn from './components/SignIn' ;
import Profile from './components/Profile' ;
import AboutUs from './components/AboutUs' ;
import ContactUs from './components/contactUs' ;
import Ceramic from './components/Ceramic' ;
import Painting from './components/Painting' ;
import ModernArt from './components/ModernArt' ;
import Sculpture from './components/Sculpture' ;
import Calligraphy from './components/Calligraphy' ;




function App() {
  return (
    <Router>

      <div>
        < ButtonAppBar/>
        <Route path="/" exact component={HomePage} />
        <Route path="/SignIn" exact component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Profile" component={Profile} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/Sculpture" component={Sculpture} />
        <Route path="/Painting" component={Painting} />
        <Route path="/Ceramic" component={Ceramic} />
        <Route path="/ModernArt" component={ModernArt} />
        <Route path="/Calligraphy" component={Calligraphy} />

      </div>
    </Router>
  );
}


export default App;


