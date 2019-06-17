import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const Styles = styled.div`
  .navbar {
      background-color: rgba(0,0,0,0.6);
      height: 75px;
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
      color: #efefef;

      &:hover {
          color: white;
      }
  }

  .marg-left{
      margin-left: 18px;
  }
  
  .separador {
      display: inline-block;
      height: 40px;
      border-left: 1px solid rgb(211, 211, 211);
  }
`;

export const NavigationBar = () => (
    <Styles className="sticky-top">
        <Navbar className="shadow"  expand="lg">
            <Navbar.Brand className="logo">
                <img
                    src={logo}
                    width="140"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link><Link to="/" className="lead">Inicio</Link></Nav.Link>
                    </Nav.Item>
                    <div className="separador"></div>
                    <Nav.Item>
                        <Nav.Link><Link to="/about" className="lead">Sobre nosotros</Link></Nav.Link>
                    </Nav.Item>
                    <div className="separador"></div>
                    <Nav.Item>
                        <Nav.Link><Link to="/contact" className="lead">Catálogos turísticos</Link></Nav.Link>
                    </Nav.Item>
                    <div className="separador"></div>
                    <Nav.Item>
                        <Nav.Link><Link to="/login" className="lead marg-left"><strong>Iniciar sesión</strong></Link></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)