import React from 'react'
function Hero() {
    return ( 
        <div className="container text-center p-5  ">
            <div className='row'>
             <img src="assets/homeHero.png" alt="Hero image" className='mb-5'/>
        <h1  className='mt-5 ' >Invest in everything</h1>
        <p>online platform to invest in stocks,dervatives,mutual funds and more</p>
        <button className='p-2 btn btn-primary fs-5 ' style={{width:"20%",margin:" 0 auto"}} >Signup now</button>
         </div>

    </div>
    );
}

export default Hero;