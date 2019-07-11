import {
    ADD_CONTRACT,
    UPDATE_CONTRACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CONTRACT_ERROR
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_CONTRACT:
            return {
                ...state,
                contracts: [...state.contracts, action.payload]
            }
        case UPDATE_CONTRACT:
            return {
                ...state,
                contracts: state.contracts.map(contract => contract.id === state.current.id ? contract = { id: contract.id, name: contract.name, description: contract.description, insurance: contract.insurance, totalAmount: contract.totalAmount, currentAmount: contract.currentAmount + parseInt(action.amount), date: contract.date } : contract)
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
                    id: 'Sin seleccionar',
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