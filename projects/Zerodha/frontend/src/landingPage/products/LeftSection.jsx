import React from 'react'
function LeftSection(props) {
    return ( <div className="container mt-3 p-5 ">
        <div className="row">
            <div className="col"><img src={props.image} alt="" /></div>
            <div className="col"><h1  > {props.title} </h1>
            <p> {props.info} </p></div>
        </div>
    </div> );
}

export default LeftSection;