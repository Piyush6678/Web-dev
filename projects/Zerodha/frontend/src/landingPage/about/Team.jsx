import React from 'react'
function Team() {
    return ( <div className="container mt-5 mb-5">
        <div className=" mb-5 text-center row" > <h1>People</h1> </div>
        <div className="row " style={{marginBottom:"5rem"}} ><div className="col text-center "  ><img style={{borderRadius:"50%" , width:"75%" }} src="assets/nithinKamath.jpg" alt="" />
                <h4>Nithin Kamath</h4>
        <h5> CEO Founder</h5>
        </div>


        <div className="col fs-3 "  >
<p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
<br />
He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
<br />
Playing basketball is his zen. <br /> 
Connect on Homepage / TradingQnA / Twitter <br /> </p>
        </div>
        </div>
    </div> );
}

export default Team;