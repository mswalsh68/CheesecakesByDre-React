import React from 'react'
import './App.css'
import Cheesecakes from './Cheesecakes'
import About from './About'
import Order from './Order'
import Logo from '../public/images/Cheesecakes by Dre Main Logo.png'
import {Routes, Route, Link} from 'react-router-dom'







export default function App() {


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
                            <Link to='/' class="nav-link">Home</Link>
                        </li>
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


        <Routes>
            <Route path='/' element={<Cheesecakes />} />
            <Route path='/About' element={<About />} />
            <Route path='/Order' element={<Order />} />
        </Routes>


    </div>
  )
}
