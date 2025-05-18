import React ,{useState}  from 'react'
import { Link } from 'react-router-dom';
function Menu() {
    return (<>
    <div className="menu-container">
        <img src="logo.png" alt=""  style={{width:"50px"}} />
        <div className="menus">
            <ul>
                <li>
                    <p>Dashboard</p>
                </li>
                <li>
                    <p>Orders</p>
                </li>
                <li>
                    <p>Holding</p>
                </li>
                <li>
                    <p>Position</p>
                </li>
                <li>
                    <p>Funds</p>
                </li>
                <li>
                    <p>Apps</p>
                </li>
            </ul>
        </div>
    </div>
    
    
    </>  );
}

export default Menu;