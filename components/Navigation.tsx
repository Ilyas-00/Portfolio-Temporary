import React, { useState, useEffect } from 'react';
import { greetings, socialLinks } from '../portfolio';
import Headroom from 'headroom.js';
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';

const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState('');
  const onExiting = () => setCollapseClasses('collapsing-out');
  const onExited = () => setCollapseClasses('');

  useEffect(() => {
    let headroom = new Headroom(document.getElementById('navbar-main')!);
    headroom.init();
  }, []);

  const handleMailClick = () => {
    window.location.href = 'mailto:akioui.ilyas@gmail.com';
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/profile.php?id=100090799121911', '_blank');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/Ilyas-00', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/ilyas-akioui/', '_blank');
  };

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand href="/" className="mr-lg-5">
              <h2 className="text-white" id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
            <button
              className="navbar-toggler"
              aria-label="navbar_toggle"
              id="navbar_global"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Email"
                    className="nav-link-icon"
                    onClick={handleMailClick}
                  >
                    <i className="fa fa-envelope" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Email
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Facebook"
                    className="nav-link-icon"
                    onClick={handleFacebookClick}
                  >
                    <i className="fa fa-facebook-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Facebook
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Github"
                    className="nav-link-icon"
                    onClick={handleGithubClick}
                  >
                    <i className="fa fa-github" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Github
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Linkedin"
                    className="nav-link-icon"
                    onClick={handleLinkedinClick}
                  >
                    <i className="fa fa-linkedin" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Linkedin
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
