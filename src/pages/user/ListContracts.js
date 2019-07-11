import React, { useContext, useEffect } from 'react'
import ContractContext from '../../context/contract/contractContext';
import styled from 'styled-components';
import { Layout } from '../../components/bootstrap/Layout';
import NavbarUser from '../../components/userTipes/user/NavbarUser';
import ContractItem2 from '../../components/userTipes/user/contracts/ContractItem2';

const Styles = styled.div`
    
    h1 {
        color: rgb(80, 80, 100);
        margin-bottom: 10px;
    }

    .container {
        max-width: 1550px;
    }

    .centro {
        margin: auto;
        width: 50%;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 10px;
      }
`;

const ListContracts = () => {
    const contractContext = useContext(ContractContext);
    const { contracts, getContract } = contractContext;

    useEffect(() => {
        getContract();
        // eslint-disable-next-line
    }, [])

    return (
        <Styles>
            <NavbarUser />
            <Layout>
                <div className="divm">
                    <h1 className="display-4 lead text-center">Lista de contratos</h1>
                    <p className="lead text-center">Aquí encontrarás todos tus contratos vigentes.</p>
                </div>
                <div className="centro mb-5">
                    {contracts.map(contract => <ContractItem2 key={contract.id} contract={contract} />)}
                </div>
            </Layout>
        </Styles>
    )
}

export default ListContracts;