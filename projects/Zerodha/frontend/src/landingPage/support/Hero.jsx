import React from 'react'
function Hero() {
    return (
        <section className="container-fluid  " id="supportHero" >
            <div className=" p-5  "  id='supportWrapper' >
                <h4>Support portal</h4>
                <a href=""> Track Tickets </a>
            </div>
            <div className="row p-5  m-5 ">
                <div className="col-6 p-5  ">
                    <h1 className='fs-3' >Search for an answer or browse help topics to create a ticket </h1>
                <input type="text " placeholder='Eg:how do i activate F&O,why is my order getting rejected'   /> <br />
           <a href="">   Track account opening  </a>
           <a href="">   Track segment activation  </a>
         <a href="">     Intraday margin  </a>
            <a href="">  Kite user manual  </a>

                </div>
                <div className="col-6  p-5 " >
                    <h1 className='fs-3' >Feature</h1>
                    <ol>
                        <li>
            <a href="">  Latest intraday leverages  </a>
                            </li>
                        <li>
         <a href="">      Cirrent takeovers and delisting   </a> </li>
                    </ol>

                </div>
            </div>
        </section>
     );
}

export default Hero;