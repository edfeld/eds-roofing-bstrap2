// NavBar
import React from 'react';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
// import FormControl from 'react-bootstrap/FormControl'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

// function search() {
//   alert("You did a search!");
// }

function NavBar () {
  return (
    <container>
    {/* Navigation bar */}
    <div className="sticky-header sticky-top">
      <div className="site-header">
        <div className="inner-site-header">
        <Navbar className="bg-black navbar-dark"  expand="lg">
        <Navbar.Brand href="/">Logo <i className="fa fa-home" aria-hidden="true"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/articles">Our Team</Nav.Link>
              <NavDropdown title="Special Offers" id="basic-nav-dropdown">
                <NavDropdown.Item href="/referrals">Referrals</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/inspections">Free Inspections</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/products-services">Products & Services</Nav.Link>
              <Nav.Link href="/testimonials">Testimonials</Nav.Link>
              <Nav.Link href="/Contact">Contact Us</Nav.Link>
              <Nav.Link href="/search"> <i className="fa fa-search" aria-hidden="true"></i></Nav.Link>
            </Nav>
            {/* <Form inline className="ml-auto"> */}
              {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
              {/* <Button variant="outline-success" onClick={()=>search()}>Search</Button> */}
            {/* </Form> */}
            {/* <Nav className="ml-auto"> */}
              {/* <Nav.Link href="#meetJesus">Meet Jesus</Nav.Link> */}
              {/* <Nav.Link href="#contactUs">Contact Us</Nav.Link> */}
            {/* </Nav> */}
          </Navbar.Collapse>
        </Navbar>
      </div>
      </div>
      </div>
  </container>
  )
}

export default NavBar;