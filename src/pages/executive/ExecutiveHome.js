import React from 'react'
import NavbarExecutive from '../../components/userTipes/executive/NavbarExecutive';
import styled from 'styled-components';
import { Layout } from '../../components/bootstrap/Layout';

const Styles = styled.div`
    .grid-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
    }

    body {
        background-color: #fff!important;
    }
    
    h1 {
        color: rgb(80, 80, 100);
        margin-bottom: 10px;
    }

    .container {
        max-width: 1600px;
    }

    .divm {
        width: 1000px;
    }


`;

const ExecutiveHome = () => {
    return (
        <Styles>
        <NavbarExecutive />
        <Layout>
            <div>
                <h1 className="display-4 lead text-center">¡Bienvenido!</h1>
                <p className="lead text-center">¿Qué deseas hacer?</p>
            </div>
        </Layout>
        </Styles>
    )
}

export default ExecutiveHome;
