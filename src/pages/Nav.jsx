import React from "react";
import logo from '/src/assets/logo.png'
import '../styles/Nav.css'

// import goes up here

function Nav(){
  return(
    <div className="nav-bar">
        <div className="nav-nav">
            <div className="logo">
                <img className="site-logo" src={logo} alt="logo" />
                <span className="logo-text">Flow</span>
            </div>

            <div className="nav-links">
                <a href="http://google.com">Product</a>
                <a href="http://google.com">Changelog</a>
                <a href="http://google.com">Pricing</a>
                <a href="http://google.com">Docs</a>
                <a href="http://google.com">Blog</a>
            </div>
        </div>
        <a href="" className="link-button">View Changelog</a>
    </div>
  );
}

export default Nav;