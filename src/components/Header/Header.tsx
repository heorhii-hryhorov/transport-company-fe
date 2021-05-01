import React from 'react';
import {
  Col,
  Container,
  Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row, UncontrolledCollapse,
} from 'reactstrap';
import './Header.css';

const Header: React.FC = () => (
  <Navbar color="primary" dark expand="md" fixed="top">
    <Container>
      <Row className="flex-fill d-flex justify-content-start">
        <Col xs="12" md="8">
          <NavbarBrand href="/" className="mr-auto">Transport Company</NavbarBrand>
          <NavbarToggler
            id="navbar-toggler"
            className="burgerBtn"
          />
        </Col>
        <Col xs="12" md="4">
          <Container>
            <Row className="flex-fill d-flex justify-content-end">
              <UncontrolledCollapse toggler="#navbar-toggler" navbar className="flex-grow-0">
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/">Transport</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Routes</NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  </Navbar>
);

export default Header;
