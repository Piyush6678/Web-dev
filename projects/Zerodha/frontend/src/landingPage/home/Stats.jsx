import React from 'react'
function Stats() {
    return (
<div className="container mt-5 p-3">
    <div className="row p-5 ">
     <div className="col-6 p-5">
        <h1 className='fs-2 mb-5  ' >Trust with confidence</h1>
        <h2 className='fs-4 ' >Customer-first always</h2>
        <p className='text-muted' >That's why 1.3+ crore customers trust Zerodha with &#8377 3.5+ lakh crores worth of equity investments ; </p>
        <h2>No span or gimmicks</h2>
        <p className='text-muted'>
            No gimmicks,spam ,"gamlification", or annoying push notification. High quality apps that you use at your pace, the way you like
        </p>
        <h2 className='fs-4' >The Zerodha universe</h2>
        <p className='text-muted'>
            Not just an app, but a whole unoverse. Our investments in 30+ fintech startups offer you tailored services specific to your needs

        </p>
        <h2  className='fs-4'  >Do better with money</h2>
        <p className='text-muted'>
            with initiatives like Nudge and kill switch , we don't just facilitate transaction , but actively help you do better with your money 
        </p></div>
        <div className="col-6 p-5 ">
            <img style={{ width:"85%"}} src="assets/ecosystem.png" alt="" />
            <div className='text-center' >
                <a  className='mx-5'style={{textDecoration:"none"}} href="">Explore our Products <i  class="fa fa-long-arrow-right" aria-hidden="true" ></i></a>
            <a style={{textDecoration:"none"}}  href=""> Try Kite demo </a></div>
        </div>
    </div>
</div>


         );
}

export default Stats;