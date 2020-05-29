import * as Types from '../../constants/ActionTypes';

const InitialState = []
const customers  = (state = InitialState, action) => {
    let index = -1;
    switch (action.type) {
        case Types.FETCH_CUSTOMERS:
            return [...action.customers]
        case Types.DELETE_CUSTOMER:
             index = state.findIndex(customer => {
                return action.id === customer.MaKH
            })
            if(index >= 0)
                state.splice(index, 1);
            
            return [...state]
        case Types.ADD_CUSTOMER:
            state.push(action.customer);
            return [...state]
        case Types.UPDATE_CUSTOMER:

            index = state.findIndex(customer => {
                return action.customer.MaKH === customer.MaKH
            });
            state = [
                ...state.slice(0, index),
                action.customer,
                ...state.slice(index + 1, state.length)
            ]
            return [...state]   
        default:
            return state
    }
}

export default customers;

