import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import Cheesecakes from './Pages/Cheesecakes'
import About from './Pages/About'
import Order from './Pages/Contact'
import Featured from './Pages/Featured'
import ThankYou from './Pages/ThankYou'
import Cart from './Pages/Cart'
import { ShoppingCartProvider } from './Context/ShoppingCartContext'


export default function App() {


  return (

    <ShoppingCartProvider>
        <Router>
                <Navigation />
                <Routes>
                    <Route path='/' element={<Featured />} />
                    <Route path='/Cheesecakes' element={<Cheesecakes />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Contact' element={<Order />} />
                    <Route path='/ThankYou' element={<ThankYou />} />
                    <Route path='/Cart' element={<Cart />} />
                </Routes>
                <Footer />
        </Router>
    </ShoppingCartProvider>

  )
}
