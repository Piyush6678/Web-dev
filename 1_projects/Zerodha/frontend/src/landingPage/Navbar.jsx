import React from "react";
import {Link} from "react-router-dom"
function Navbar() {
  return (
   
      <nav class="navbar  border-bottom navbar-expand-lg " style={{backgroundColor: "FFF"}} >
        <div class="container p-2 ">
          <Link class="navbar-brand" to="/">
          <img style={{width:"24%"}}  src="assets/logo.svg" alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Sign up 
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" to="/about">
                About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active " to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active " to="/pricing">
                  Pricing
                </Link> </li>
              <li class="nav-item">
                <Link class="nav-link active" to="support">
                  Support
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                 <i class="fa fa-bars" aria-hidden="true"></i>
                </a>
              </li>
             
            </ul>
           
        
            </form>
          </div>
        </div>
      </nav>
 
  );
}

export default Navbar;
