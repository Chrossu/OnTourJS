import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
      background-color: #88c4e2;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
      color: #efefef;

      &:hover {
          color: white;
      }
  }

  .logo{
    margin-left: 20px;
  }

  .marg-left{
      margin-left: 23px;
  }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar className="fixed-top shadow mb-5 rounded" expand="lg">
            <Navbar.Brand className="logo" href="/">On Tour</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link><Link to="/" className="lead">Inicio</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/about" className="lead">Sobre nosotros</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/contact" className="lead">Contacto</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link><Link to="/login" className="lead marg-left"><strong>Iniciar sesión</strong></Link></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)