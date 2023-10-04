import React from 'react'
import './App.css'
import Logo from '../public/images/Cheesecakes by Dre Main Logo.png'
import {Routes, Route, Link} from 'react-router-dom'
import Order from './Order'
import About from './About'



export default function Navbar() {
  return (
    
    <div>

<div class="navbar navbar-expand-md">
            <div class="container">  
                <Link to='/' class="navbar-brand"><img src={Logo} /></Link>        
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
                        <span class="navbar-toggler-icon"></span>
                </button>        
                <div class="collapse navbar-collapse" id="nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to='/Order' class="nav-link">Order</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/About' class="nav-link">About Us</Link>
                        </li>
                    </ul>
                </div>  
            </div> 
        </div>    


        <div className="headline">
            <h1><b>Featured Cheesecakes</b></h1>
        </div>

        <Routes>
            <Route path='/Order' element={<Order />} />
            <Route path='/About' element={<About />} />
        </Routes>
    
    </div>
  )
}
