import React, { useState } from 'react';
import RegisterForm from './Register/RegisterForm';
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

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="info" light expand="md">
        <NavbarBrand href="/">Medi-Cabinet➕</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Profile
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem>
                  <Button color="info">Login 🔓</Button>
                </DropdownItem>
                <DropdownItem>
                    <Button color="warning" onClick={toggle}>Register 📝</Button>
                        <Modal isOpen={isOpen} toggle={toggle}>
                            <ModalHeader toggle={toggle}>Registration</ModalHeader>
                                    <ModalBody>
                                        <RegisterForm />                                      
                                    </ModalBody>
                                <ModalFooter>
                                <Button color="warning" onClick={toggle}>Register</Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
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