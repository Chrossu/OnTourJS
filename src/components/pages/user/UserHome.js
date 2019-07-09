import React from 'react'
import NavbarUser from '../../userTipes/user/NavbarUser';
import Contracts from '../../contracts/Contracts';
import styled from 'styled-components';
import { Layout } from '../../bootstrap/Layout';

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
        margin-bottom: 2rem;
    }

    .container {
        max-width: 1600px;
    }

    .divm {
        width: 1000px;
    }
`;

const UserHome = () => {
    return (
        <Styles>
        <NavbarUser />
        <Layout>
            <div className="grid-2">
                <div className="divm">
                <h1 className="lead display-4 text-center">Información general</h1>
                </div>
                <div>
                    <h1 className="lead display-4 text-center">Contratos activos</h1>
                    <Contracts />
                </div>
            </div>
        </Layout>
        </Styles>
    )
}

export default UserHome
