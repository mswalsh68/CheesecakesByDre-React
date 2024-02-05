import './App.css'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import Cheesecakes from './Pages/Cheesecakes'
import About from './Pages/About'
import Order from './Pages/Order'
import Featured from './Pages/Featured'
import ThankYou from './Pages/ThankYou'







export default function App() {


  return (

    
<Router>
        <Navigation />
        <Routes>
            <Route path='/' element={<Featured />} />
            <Route path='/Cheesecakes' element={<Cheesecakes />} />
            <Route path='/About' element={<About />} />
            <Route path='/Order' element={<Order />} />
            <Route path='/ThankYou' element={<ThankYou />} />
        </Routes>
        <Footer />
</Router>


  )
}
