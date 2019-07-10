import React, { useContext } from 'react'
import ContractContext from '../../context/contract/contractContext';
import Contracts from '../../components/userTipes/user/contracts/Contracts';
import NavbarUser from '../../components/userTipes/user/NavbarUser';
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
        color: var(--primary-color);
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
    const contractContext = useContext(ContractContext);
    const { contracts } = contractContext;

    return (
        <Styles>
        <NavbarUser />
        <Layout>
            <div className="grid-2">
                <div className="divm">
                <h1 className="lead text-center"><strong>Información general</strong></h1>
                </div>
                <div>
                    <h1 className="lead text-center"><strong>Contratos activos</strong></h1>
                    <Contracts contracts={contracts} />
                </div>
            </div>
        </Layout>
        </Styles>
    )
}

export default UserHome
