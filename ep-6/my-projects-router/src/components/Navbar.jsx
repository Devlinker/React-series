import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <h1>Acer</h1>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    </nav>
  )
}

export default Navbar;  