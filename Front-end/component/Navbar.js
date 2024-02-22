import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'
import nbabro from './images/NBA1.png';
import naacbro from './images/NAAC1.png';
import logo1 from './images/logo1.png';
const Navbar = () => {
    const auth=useAuth()
    return (
      <div>
        <header className='headbro2'>
           <center>
          <p><font size="30px" color="white">RAJEEV GANDHI MEMORIAL COLLEGE OF ENGINEERING & TECHNOLOGY<br></br>NANDYAL</font></p></center> 
          <nav className='nav1'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink> 
            <NavLink to="/profile">Profile</NavLink> 
            {/* <NavLink to="/BYS">BYS</NavLink> */}
            {!auth.user &&<NavLink to="/BYS">Booking</NavLink>}
            {/* {!auth.user1 &&<NavLink to="/Hall">Hall</NavLink>} */}
            {/* <NavLink to="/Hall">Hall</NavLink> */}
            {!auth.user &&
            <NavLink to="/Login">Login</NavLink>}
            <NavLink to="/SeeDB">SeeDB</NavLink>
        </nav>
            <div class="item1">
                <img class="abc" src={logo1}/>
                <img class="ab" src={naacbro}/> 
                <img class="ac" src={nbabro}/>
            </div><br></br>
        </header>
      </div>
      )
    }
export default Navbar