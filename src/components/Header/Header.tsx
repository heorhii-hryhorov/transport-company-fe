import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Row,
  UncontrolledCollapse,
  UncontrolledDropdown,
} from 'reactstrap';
import styles from './Header.module.css';

const Header: React.FC = () => (
  <header className={styles['header-area']}>
    <Navbar color="primary" dark expand="md" fixed="top">
      <Container>
        <Row className="flex-fill d-flex justify-content-start">
          <Col xs="12" md="8">
            <NavbarBrand href="/" className="mr-auto">Transport Company</NavbarBrand>
            <NavbarToggler
              id="navbar-toggler"
              className={styles['burger-btn']}
            />
          </Col>
          <Col xs="12" md="4">
            <Container>
              <Row className="flex-fill d-flex justify-content-end">
                <UncontrolledCollapse toggler="#navbar-toggler" navbar className="flex-grow-0">
                  <Nav navbar>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Transport
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem tag={Link} to="/transport/create">
                          Create
                        </DropdownItem>
                        <DropdownItem tag={Link} to="/transport/edit">
                          Edit
                        </DropdownItem>
                        <DropdownItem tag={Link} to="/transport/delete">
                          Delete
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Routes
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem tag={Link} to="routes/create">
                          Create
                        </DropdownItem>
                        <DropdownItem tag={Link} to="routes/edit">
                          Edit
                        </DropdownItem>
                        <DropdownItem tag={Link} to="routes/delete">
                          Delete
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>

                  </Nav>
                </UncontrolledCollapse>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </header>
);

export default Header;
