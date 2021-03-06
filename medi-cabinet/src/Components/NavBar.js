import React, { useState } from 'react';
import RegisterForm from './Register/RegisterForm';
import Login from './Login/Login';
import { Switch, Route, useHistory, Link } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Dashboard from './UserProfile/Dashboard';
import Quiz from './Quiz/Quiz';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const history = useHistory();
  const toggle = () => setIsOpen(!isOpen);
  const logToggle = () => setIsLoginOpen(!isLoginOpen);
  const quizToggle = () => setIsQuizOpen(!isQuizOpen);


  const ViewAllRoute = () => {
    history.push('/viewall');
  };



  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" >MedCabinet➕</NavbarBrand>
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
                      <Login />
                    </ModalBody>
                    {/* <ModalFooter>
                        <Button color="warning" onClick={logToggle}>Login</Button>{' '}
                        <Button color="secondary" onClick={logToggle}>Cancel</Button>
                      </ModalFooter> */}
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
                        <Button color="warning" type="submit" onClick={toggle}>Register</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                      </ModalFooter> */}
                  </Modal>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/dashboard">
                    <Button color="primary" >Dashboard 👤</Button>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Button color="secondary" onClick={quizToggle}>Take our Quiz ❓</Button>

                  <Modal isOpen={isQuizOpen} toggle={quizToggle}>
                    <ModalHeader toggle={quizToggle}>Answer these questions</ModalHeader>
                    <ModalBody>
                      <Quiz setQuizResults={props.setQuizResults} quizToggle={quizToggle} />
                    </ModalBody>
                  </Modal>
                </DropdownItem>
                {/* <DropdownItem>
                  <Button color="success" onClick={ViewAllRoute}>See all strains 🌿</Button>
                </DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>




  );
}

export default NavBar; 