import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.7rem 2rem;
        z-index: 1;
        width: 100%;
        border-bottom: solid 1px var(--primary-color);
        opacity: 0.9;
        margin-bottom: 1rem;
        color: rgb(241, 240, 240);
    }

    .navbar ul {
        display: flex;
    }

    .navbar a {
        color: #fff;
        padding: 0.45rem;
        margin: 0 0.25rem;
    }
      
    .navbar a:hover {
        color: var(--light-color);
    }
      
    .navbar .welcome span {
        margin-right: 0.6rem;
    }

    .bg-primary {
        background-color: #003699!important;
    }

    ul {
        list-style: none;
    }

    a, h1 {
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
    }

    span {
        display: inline-block;
        vertical-align: middle;
    }
`;

const NavbarUser = () => {
    return (
        <Styles>
            <div className="navbar bg-primary">
                <h1><i class="fas fa-umbrella-beach mr-2" />On Tour</h1>
                <ul className="align">
                    <li style={{ marginTop: "13px" }}><Link to="/users">Home</Link></li>
                    <li style={{ marginTop: "13px" }}><Link to="/contratos">Contratos</Link></li>
                    <li style={{ marginTop: "13px" }}><Link to="/depositos">Realizar depósitos</Link></li>
                    <li style={{ marginTop: "13px" }}><Link to="/logout">Cerrar sesión</Link></li>
                </ul>
            </div>
        </Styles>
    )
}

export default NavbarUser;
