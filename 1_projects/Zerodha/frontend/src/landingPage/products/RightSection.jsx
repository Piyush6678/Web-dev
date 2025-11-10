import React from 'react'
function RightSection(props) {
    return ( <div className="container">
        <div className="row">
            <div className="col text-center "><h1  > {props.title} </h1>
            <p> {props.info} </p></div>
            <div className="col"><img src={props.image} alt="" /></div>
        </div>
    </div> );
}

export default RightSection;