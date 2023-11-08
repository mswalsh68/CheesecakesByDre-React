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
          <div className="navbar navbar-expand-md">
            <div className="container">  
                <Link to='/' className="navbar-brand"><img src={Logo} /></Link>        
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>        
                <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Order' className="nav-link">Order</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/About' className="nav-link">About</Link>
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
