import React ,{useState}  from 'react'
import { Link } from 'react-router-dom';
function Menu() {

const [selectedmenu,setSelectedMenu]=useState(0);
const [isProfileDropdownopen,setIsProfileDropdownopen]=useState(false)

const handleMenuClick=  (index)=>{
    setSelectedMenu(index);
}
const handleProfileClick=  ()=>{
    setIsProfileDropdownopen(!isProfileDropdownopen);
}

const menuClass="menu";
const activemenuClass="menu selected";



    return (<>
    <div className="menu-container">
        <img src="logo.png" alt=""  style={{width:"50px"}} />
        <div className="menus">
           <ul>
    <li>
        <Link style={{textDecoration:"none"}} to="/" onClick={() => handleMenuClick(0)}>
            <p className={selectedmenu === 0 ? activemenuClass : menuClass}>Dashboard</p>
        </Link>
    </li>
    <li>
        <Link style={{textDecoration:"none"}} to="/orders" onClick={() => handleMenuClick(1)}>
            <p className={selectedmenu === 1 ? activemenuClass : menuClass}>Orders</p>
        </Link>
    </li>
    <li>
        <Link style={{textDecoration:"none"}} to="/holdings" onClick={() => handleMenuClick(2)}>
            <p className={selectedmenu === 2 ? activemenuClass : menuClass}>Holding</p>
        </Link>
    </li>
    <li>
        <Link style={{textDecoration:"none"}} to="/positions" onClick={() => handleMenuClick(3)}>
            <p className={selectedmenu === 3 ? activemenuClass : menuClass}>Position</p>
        </Link>
    </li>
    <li>
        <Link style={{textDecoration:"none"}} to="/funds" onClick={() => handleMenuClick(4)}>
            <p className={selectedmenu === 4 ? activemenuClass : menuClass}>Funds</p>
        </Link>
    </li>
    <li>
        <Link style={{textDecoration:"none"}} to="/apps" onClick={() => handleMenuClick(5)}>
            <p className={selectedmenu === 5 ? activemenuClass : menuClass}>Apps</p>
        </Link>
    </li>
</ul>
            <hr />
            <div className="profile"  onClick={handleProfileClick} >
                <div className="avatar">ZU</div>
                <p className="username">USERID</p>
            </div>
        </div>
    </div>
    
    
    </>  );
}

export default Menu;