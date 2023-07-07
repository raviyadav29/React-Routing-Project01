import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css";

function Nav() {
    return (
        <div className='nav'>
            <div className='title'>
                <h2>Geekster</h2>
            </div>
            <div className='page'>
                <Link to="/home">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    )
}

export default Nav