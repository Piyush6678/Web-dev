  import React from 'react'
  
  function Education() {
    return (
       <div className="container mt-3 p-5 ">
        <div className="row ">
          <div className="col "><img src="assets/education.svg" alt="" /></div>
          <div className="col">
            <h1  className='  mt-5 mb-5' >Free and open market education </h1>
          <p> Varsity, the largest online stock market book education book in the world covering everything from the basics to advanced trading </p>
          <a  style={{textDecoration:"none"}} href="">Varsity  <i  class="fa fa-long-arrow-right" aria-hidden="true" ></i></a>
          <p className='mt-5'>Trading Q&A, the most activetrading and investment community in India for all your market related queries</p>

          <a style={{textDecoration:"none"}}  href=""> Trading Q&A   <i  class="fa fa-long-arrow-right" aria-hidden="true" ></i> </a></div>
          </div>
       </div>
     );
  }
  
  export default Education;