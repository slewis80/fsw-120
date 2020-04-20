import React from "react";
import Navbar from "./Navbar";
let background = "https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg";

function Header() {
    return (
        // What I started... 
        // <div id="header">
        //     <Navbar />
        //     <h1>Clean Blog</h1>
        //     <p>A Blog Theme by Start Bootstrap</p>
        //     <img id="homeImg" src="https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg"/>
        // </div>

        // mostly copied from website and modified for React... 
        <header class="masthead" style={{backgroundImage: `url(${background})`}}>
    <div className="overlay"></div>
    <div className="container">
    <Navbar />
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>Clean Blog</h1>
            <span className="subheading">A Blog Theme by Start Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  </header>
    )
}

export default Header;