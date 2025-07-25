import React from 'react'
import{ Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../styles/Layout.css'

function Layout() {
  return (
    <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
       
        <li>
          <Link to="/blog">Blog</Link>

        </li>
         
      </ul>
    </nav>
    <Outlet/>
</>
  )
}

export default Layout