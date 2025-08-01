import React from 'react'
function Pricing() {
    return ( <div className="container mt-5 p-5 ">
        <div className="row">
            <div className="col-4">
                <h1  className='mb-3'   >Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in india.Flat fees and no hidden charges</p>
                <a  style={{textDecoration:"none"}} href="">See pricing   <i  class="fa fa-long-arrow-right" aria-hidden="true" ></i> </a>
            </div>
            <div className="col-2"></div>
            <div className="col-6">
                <div className="row  text-center ">
                    <div className="col p-2 border ">
                        <h1 className='mb-3'  >₹0</h1>
                        <p>Free equity delivery and <br />direct mutual finds</p>
                    </div>
                    <div className="   border  p-2 col">
                        <h1 className='mb-3'  >   ₹20</h1>
                        <p>Intraday and F&O</p>
                    </div>
                </div>


            </div>
        </div>
    </div> );
}

export default Pricing;