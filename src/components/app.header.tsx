'use client'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
const AppHeader = () => {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand href="#home" className='navbar-brand'>Ninh Dev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/blogs" className='nav-link'>Blogs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
}
export default AppHeader