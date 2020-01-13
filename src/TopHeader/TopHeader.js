import React from "react";
import './TopHeader.css';
import {Container,
  Navbar,
  NavDropdown,
  Nav,
  Form, 
  InputGroup,  
  FormControl, 
  Row, 
  Col, 
  Button,
  Image
  
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCoffee, faSearch,
    
} from '@fortawesome/free-solid-svg-icons'



function TopHeader(){
  return(<>
      <div className="topHeader">
        <Container>
        <Navbar  expand="lg">
  <Navbar.Brand href="#"><Image className="logo" src="assets/logo.jpg"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mrLeft">
      <Nav.Link><Button variant="primary" size="sm">Register</Button></Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form className="searchBar">
      
                    <InputGroup>
                            
                            <Form.Control
                                type="text"
                                placeholder="Search here.."
                            />
                            <InputGroup.Prepend>
                                <InputGroup.Text>
                                <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>

                        
    </Form>
  </Navbar.Collapse>
</Navbar>
        </Container>
      </div>


    </>
  )
}

export default TopHeader;