import React from 'react'
import logo from '../images/logo.png'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../App'
function Header() {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext)
    return (
        <div>
            <div className="header__logo">
            <img src={logo} className='logo' alt="" />
            </div>
            <nav>
               <NavLink to="/shop">Shop</NavLink>
               <NavLink to="/review">Order Review</NavLink>
               <NavLink to="/manage">Manage Inventory</NavLink>
    <button onClick={() => setLoggedinUser('')}>{loggedinUser && "singout"}</button>
            </nav>
        </div>
    )
}

export default Header
