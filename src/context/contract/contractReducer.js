import {
    ADD_CONTRACT,
    DELETE_CONTRACT,
    UPDATE_CONTRACT,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case ADD_CONTRACT:
            return {
                ...state,
                contracts: [...state.contracts, action.payload]
            }
        default:
            return state;
    }
}