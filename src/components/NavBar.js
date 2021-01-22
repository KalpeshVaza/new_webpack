import React, { useState, useEffect} from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import "./Navbar1.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Menu, Dropdown } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Link,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";
// import Cookies from "js-cookie";



const NavBar = () => {
  const  passsitecoredata = () =>{
    console.log(user);
   
  }
 
  const [postId, setPostId] = useState(null);
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user, null, 2)
    };
    // test url https://jsonplaceholder.typicode.com/posts
    fetch('https://ec2-18-220-230-153.us-east-2.compute.amazonaws.com/api/login/authenticate', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);


  const [isOpen, setIsOpen] = useState(false);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  console.log(loginWithRedirect);
 
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });


  return (
    <div className="nav-container">
      <Navbar color="dark" dark expand="md">
        <Container>
        {/* <b>POC Sitecore - React &nbsp;</b> */}
          <NavbarBrand >
    <img src={logo} className="logo1" />
            </NavbarBrand>
          
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>              
             <NavLink>
               <a href="https://www.resideo.com/us/en/pro/products/air/">Products</a>
             </NavLink>             
             <NavLink>
               <a href="https://www.resideo.com/us/en/pro/solutions/">Solutions</a>
             </NavLink>
             <NavLink>
               <a href="https://www.resideo.com/us/en/pro/resources/">Resources</a>
             </NavLink>
             {/*<NavLink>
               <a href="https://pro.resideo.com/perks/">PERKS</a>
             </NavLink>*/}
             {isAuthenticated && (
             <NavLink>
               <a href="https://pro.resideo.com/company">My Business</a>
             </NavLink>  
             )}
         
         
         {/* <button onClick={() => passsitecoredata()}>test</button> */}

            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    className="btn-margin"
                    onClick={() => loginWithRedirect()}
                  >
                    Join / Sign in
                  </Button>
                </NavItem>
              )}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="40"
                    />
                  </DropdownToggle>
                  <DropdownMenu>                    
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/profile"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      My profile
                    </DropdownItem>             
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/company"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      My company
                    </DropdownItem>
                    <DropdownItem
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      Sign out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isAuthenticated && (
              <Nav className="d-md-none" navbar>
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="primary"
                    block
                    onClick={() => loginWithRedirect({})}
                  >
                    Sign in
                  </Button>
                </NavItem>
              </Nav>
            )}
            {isAuthenticated && (
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170 }}
              >
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                    />
                    <h6 className="d-inline-block">{user.name}</h6>
                  </span>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="user" className="mr-3" />
                  <RouterNavLink
                    to="/profile"
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="power-off" className="mr-3" />
                  <RouterNavLink
                    to="#"
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                    Log out
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
