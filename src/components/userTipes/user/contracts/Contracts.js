import React, { useContext } from 'react'
import ContractContext from '../../../../context/contract/contractContext';
import ContractItem from '../contracts/ContractItem';

const Contracts = () => {
    const contractContext = useContext(ContractContext);
    const { contracts } = contractContext;
    
    return (
        <React.Fragment>
            {contracts.map(contract => <ContractItem key={contract.id} contract={contract} />)}
        </React.Fragment>
    )
}

export default Contracts;
