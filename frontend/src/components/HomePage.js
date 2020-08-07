// import React, { Component } from "react";
// import axios from "axios";

// export default class HomePage extends Component {
//   constructor() {
//     super();
//     this.submitClick = this.submitClick.bind(this);
//   }

//   submitClick(event) {
//     event.preventDefault();
//     alert("Searching Result");
//   }
//   //make req. for data with spasific id
//   /* axios
//   .get('/data',(req,res)=>{

//   .then(function (response)
//     console.log(response);
//   })
//    .catch(function (error) {
//     console.log(error);
//   });
//   });*/

//   /*axios
//   .get('/data', (req,res)=>{

//    data.map((artwork) => {
//       console.log(artwork.category);
//       console.log("artwork", artwork);
//     });
//     .then((response) => {
//       console.log("hi", response);
//     })
//     .catch((error) => {
//       console.log(" error", error);
//     });
//   }*/
//   render() {
//     return (
//       <>
//         <div className="HomePage">
//           <br></br>
//           <br></br>
//           <form id="search" onSubmit={this.submitClick}>
//             {/* <label className="searchL">
//               {" "}
//               Search By Name
//               <input className="searchI" type="search"></input>
//               <input
//                 className="searchBttn"
//                 type="submit"
//                 value="Search"
//               ></input>
//             </label> */}
//             <div>
//               <ul id="nav">
//                 <li>
//                   <a href="home">Home</a>
//                 </li>
//                 <li>
//                   <a href="aboutus">About Us</a>
//                 </li>
//                 <li>
//                   <a href="signup">Sign UP</a>
//                 </li>
//                 <li>
//                   <a href="contact">Contact</a>
//                 </li>
//               </ul>
//             </div>
//             <br></br>
//             <br></br>
//           </form>
//           <table id="category">
//             <thead>
//               <tr>
//                 <th id="heder">categories</th>
//               </tr>
//             </thead>
//             <tbody id="body">
//               <tr>
//                 <a href="Fine Art">Fine Art</a>
//               </tr>
//               <tr>
//                 <a href="Sculpting">Sculpting</a>
//               </tr>
//               <tr>
//                 <a href="Ceramics">Ceramics</a>
//               </tr>
//               <tr>
//                 <a href="Empty">Empty</a>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </>
//     );
//   }

// };

// export default HomePage;

import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import HomePageHeader from "./HomePageHeader";
import ButtonAppBar  from "./NavBar";

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexWrap: "wrap",
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover": {
      zIndex: 1,
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15,
    },
    "&:hover $imageMarked": {
      opacity: 0,
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor",
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

function ArtCategories(props) {
  const classes = styles();

  const images = [
    {
      url:
        "https://images.pexels.com/photos/1102292/pexels-photo-1102292.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Ceramic",
      width: "50%",
      purl: "./Ceramic",
    },
    {
      url:
        "https://images.pexels.com/photos/2900935/pexels-photo-2900935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Painting",
      width: "50%",
      purl: "Painting",
    },
    {
      url:
        "https://i.pinimg.com/564x/95/9b/d3/959bd3dd4341c37904b4c715fcdee3c6.jpg",
      title: "Modern Art",
      width: "50%",
      purl: "./Modern Art",
    },
    {
      url:
        "https://images.pexels.com/photos/3738123/pexels-photo-3738123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Sculpture",
      width: "50%",
      purl: "./Sculpture",
    },
    {
      url:
        "https://images.pexels.com/photos/3139298/pexels-photo-3139298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Calligraphy",
      width: "50%",
      purl: "./Calligraphy",
    },
  ];

  return (
    <div className="n">
      <HomePageHeader />
      <Container className={classes.root} component="section">
        <Typography variant="h3" marked="center" align="center" component="h2">
          Fine Art Categories
        </Typography>
        <br />
        <Typography color="inherit" align="center" variant="h6" className={classes.h6}>
        Enjoy Beauty of Art
      </Typography>
        <br />
        <div className={classes.images}>
          {images.map((image) => (
            <ButtonBase
              key={image.title}
              className={classes.imageWrapper}
              style={{
                width: image.width,
              }}
              href={image.purl}
            >
              <div
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <div className={classes.imageBackdrop} />
              <div className={classes.imageButton}>
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <div className={classes.imageMarked} />
                </Typography>
              </div>
            </ButtonBase>
          ))}
        </div>
      </Container>
    </div>
  );
}

ArtCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArtCategories);
