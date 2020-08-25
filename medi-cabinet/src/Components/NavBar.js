import React, { useState } from 'react';
import RegisterForm from './Register/RegisterForm';
import LoginForm from './Login/Login';
import PrivateRoute from '../PrivateRoute'; 
import {
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import Dashboard from './UserProfile/Dashboard';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const logToggle = () => setIsLoginOpen(!isLoginOpen); 


  const DashBoardRoute = () => {

  }

  return (
    <div>
      <Navbar color="success" light expand="md">
        <NavbarBrand href="/" >Medi-Cabinet➕</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Click Here
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  <Button color="info" onClick={logToggle}>Login 🔐</Button>{' '}
                    <Modal isOpen={isLoginOpen} toggle={logToggle}>
                      <ModalHeader toggle={logToggle}>Login</ModalHeader>
                          <ModalBody>
                           <LoginForm />                                      
                          </ModalBody>
                      <ModalFooter>
                        <Button color="warning" onClick={logToggle}>Login</Button>{' '}
                        <Button color="secondary" onClick={logToggle}>Cancel</Button>
                      </ModalFooter>
                    </Modal>
                </DropdownItem>
                <DropdownItem>
                    <Button color="warning" onClick={toggle}>Register 📝</Button>
                        <Modal isOpen={isOpen} toggle={toggle}>
                            <ModalHeader toggle={toggle}>Registration</ModalHeader>
                                    <ModalBody>
                                        <RegisterForm />                                      
                                    </ModalBody>
                            {/* <ModalFooter>
                                <Button color="warning" onClick={toggle}>Register</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter> */}
                        </Modal>
                </DropdownItem>
                <DropdownItem>
                  <Button color="primary">Dashboard 👤</Button>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Button color="success">See all strains 🌿</Button>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

    


  );
}

export default NavBar; 