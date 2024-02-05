import '../App.css'
import Logo from '../images/Cheesecakes by Dre Main Logo.png'
import {Link} from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'




export default function Navigation() {
  return (

<div className='nav'>
<Navbar className="navbar" expand="md">
    <div className="container">
        <Link to='/' >
            <img className="mainLogo" src={Logo}/>
        </Link>

            <Navbar.Toggle className='button' data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
                    <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse  id="nav">
                <Nav>
                    <Nav.Link>
                        <Link to='/'>Home</ Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/Cheesecakes'>Cheesecakes</ Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/Order'>Order</Link>
                    </Nav.Link>

                    {/* <Nav.Link>
                        <Link to='/About'>About</Link>
                    </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
    </div>
    
        
</Navbar>

        <div className='IG'>Find us on Instagram 
            <Link className='IG-link' to="https://www.instagram.com/cheesecakesbydre" target="_blank">
            </Link>
        </div>
</div>
  )
}
