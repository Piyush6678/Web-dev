import React from 'react'
import "../App.css"
import {Link} from"react-router-dom"
export default function LandingPage() {
  return (
    <div className='landingPageContainer' >
      <nav>
        <div className='navHeader' >  <h2>WE MEET</h2> </div>
        <div className='navList' > <p>
            Join as Guest  </p> 
            <p>Register</p>
            <div role='button' >
                <p>Login</p>
            </div>
            </div>
      </nav>

    <div className="landingMainContainer">

<div> <h1> <span style={{color:"#ff9839"}}  >Connect</span> with your loved ones </h1>
<p>Cove a distance by WE MEET </p>
<div>
   <Link to={"/auth"} > Get Started  </Link> 
</div>
 </div>
<div role='button' >
<img src="/mobile.png" alt="" />
</div>

    </div>


    </div>
  )
}
