import React, { useReducer } from 'react';
import axios from 'axios';
import ContractContext from './contractContext';
import contractReducer from './contractReducer';
import {
    ADD_CONTRACT,
    UPDATE_CONTRACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CONTRACT_ERROR,
    GET_CONTRACTS,
    CLEAR_CONTRACTS
} from '../types';

const ContractState = (props) => {
    const initialState = {
        contracts: [],
        current: {
            _id: 'Sin seleccionar',
            name: 'Sin seleccionar',
            currentAmount: 0,
            totalAmount: 0
        },
        error: null
    }

    const [state, dispatch] = useReducer(contractReducer, initialState);

    // Get contracts
    const getContract = async () => {
        try {
            const res = await axios.get('/api/contracts');

            dispatch({
                type: GET_CONTRACTS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: CONTRACT_ERROR,
                payload: err.response.msg
            });
        }
    };

    // Add contract
    const addContract = async contract => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/contracts', contract, config);

            dispatch({
                type: ADD_CONTRACT,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: CONTRACT_ERROR,
                payload: err.response.msg
            });
        }
    };



    // Set current contract
    const setCurrent = contract => {
        dispatch({ type: SET_CURRENT, payload: contract })
    };

    // Clear current contract
    const clearCurrent = contract => {
        dispatch({
            type: CLEAR_CURRENT, payload: {
                current: {
                    id: 'Sin seleccionar',
                    name: 'Sin seleccionar',
                    currentAmount: 0,
                    totalAmount: 0
                }
            }
        })
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
            error: state.error,
            addContract,
            setCurrent,
            clearCurrent,
            updateContract,
            getContract
        }}>
            {props.children}
        </ContractContext.Provider>
    )
}

export default ContractState;