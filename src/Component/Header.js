import React from 'react'
import { Nav,Navbar} from 'react-bootstrap'
function Header() {
    
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">ProShop</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="/cart" className='fas fa-shopping-cart '> Cart</Nav.Link>
          <Nav.Link href="/signin" className='fas fa-user'> SIGNIN</Nav.Link>
        </Nav>
      </Navbar>
        </div>
    )
}

export default Header
