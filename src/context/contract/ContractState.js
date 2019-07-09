import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContractContext from './contractContext';
import contractReducer from './contractReducer';
import {
    ADD_CONTRACT,
    DELETE_CONTRACT,
    UPDATE_CONTRACT,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../types';

const ContractState = (props) => {
    const initialState = {
        contracts: [
            {
                id: 1,
                name: 'Tokyo',
                currentAmount: 12000,
                totalAmount: 2000000,
            },
            {
                id: 2,
                name: 'Argentina',
                currentAmount: 90000,
                totalAmount: 5000000,
            },
            {
                id: 3,
                name: 'Japón',
                currentAmount: 32000,
                totalAmount: 3000000,
            }
        ]
    }

    const [state, dispatch] = useReducer(contractReducer, initialState);

    // Add contract


    // Delete contract


    // Set current contract


    // Clear current contract


    // Update contract


    // Filter contracts


    // Clear filter

    return (
        <ContractContext.Provider value={{
            contracts: state.contracts
        }}>
            {props.children}
        </ContractContext.Provider>
    )
}

export default ContractState;