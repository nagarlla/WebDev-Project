import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div>
        <input type='search' placeholder='search'/>
        <nav>
            <Link to="new"><h3>New</h3></Link>
            <Link to="Best"><h3>Best</h3></Link>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Product