import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContractContext from './contractContext';
import contractReducer from './contractReducer';
import {
    ADD_CONTRACT,
    UPDATE_CONTRACT,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../types';

const ContractState = (props) => {
    const initialState = {
        contracts: [
            {
                id: 1,
                name: 'Tokyo, Japón',
                currentAmount: 12000,
                totalAmount: 2000000,
                description: 'Viaje maravilloso acompañado de pack N°2 con mujerzuelas',
                insurance: true,
                date: '04/07/2019'
            },
            {
                id: 2,
                name: 'Buenos Aires, Argentina',
                currentAmount: 90000,
                totalAmount: 5000000,
                description: 'Viaje maravilloso acompañado de pack N°4 con lolis',
                insurance: false,
                date: '04/07/2019'
            },
            {
                id: 3,
                name: 'Torres del Paine, Chile',
                currentAmount: 32000,
                totalAmount: 3000000,
                description: 'Viaje maravilloso acompañado de pack N°1 con mujerzuelos y cabaña de 3 pisos',
                insurance: false,
                date: '04/07/2019'
            }
        ],
        current: {
            id: 'Sin seleccionar',
            name: 'Sin seleccionar',
            currentAmount: 0,
            totalAmount: 0
        }
    }

    const [state, dispatch] = useReducer(contractReducer, initialState);

    // Add contract
    const addContract = contract => {
        contract.id = uuid.v4();
        dispatch({ type: ADD_CONTRACT, payload: contract });
    }

    // Delete contract


    // Set current contract
    const setCurrent = contract => {
        dispatch({ type: SET_CURRENT, payload: contract })
    };

    // Clear current contract
    const clearCurrent = contract => {
        dispatch({ type: CLEAR_CURRENT, payload: {
            current: {
                id: 'Sin seleccionar',
                name: 'Sin seleccionar',
                currentAmount: 0,
                totalAmount: 0
            }
        } })
    };

    // Update contract
    const updateContract = (id, amount) => {
        dispatch({ type: UPDATE_CONTRACT, payload: id, amount })
    };

    // Filter contracts


    // Clear filter

    return (
        <ContractContext.Provider value={{
            contracts: state.contracts,
            current: state.current,
            addContract,
            setCurrent,
            clearCurrent,
            updateContract
        }}>
            {props.children}
        </ContractContext.Provider>
    )
}

export default ContractState;