import {
    ADD_CONTRACT,
    UPDATE_CONTRACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CONTRACT_ERROR,
    GET_CONTRACTS
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_CONTRACTS:
            return {
                ...state,
                contracts: action.payload,
                loading: false
            }
        case ADD_CONTRACT:
            return {
                ...state,
                contracts: [...state.contracts, action.payload],
                loading: false
            }
        case UPDATE_CONTRACT:
            return {
                ...state,
                contracts: state.contracts.map(contract => contract._id === state.current._id ? contract = { id: contract._id, name: contract.name, description: contract.description, insurance: contract.insurance, totalAmount: contract.totalAmount, currentAmount: contract.currentAmount + parseInt(action.amount), date: contract.date } : contract),
                loading: false
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: {
                    _id: 'Sin seleccionar',
                    name: 'Sin seleccionar',
                    currentAmount: 0,
                    totalAmount: 0
                }
            }
        case CONTRACT_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}