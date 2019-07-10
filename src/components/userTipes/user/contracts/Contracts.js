import React, { useContext } from 'react'
import ContractItem from '../contracts/ContractItem';


const Contracts = (props) => {
    
    return (
        <React.Fragment>
            {props.contracts.map(contract => <ContractItem key={contract.id} contract={contract} />)}
        </React.Fragment>
    )
}

export default Contracts;
