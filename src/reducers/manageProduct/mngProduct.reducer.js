import * as Types from '../../constants/ActionTypes';

const InitialState = []
const product  = (state = InitialState, action) => {
    let index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            return [...action.products]
        case Types.DELETE_PRODUCT:
             index = state.findIndex(product => {
                return action.id === product.MaHang
            })
            if(index >= 0) {
                state.splice(index, 1);
            }
            return [...state]
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state]
        case Types.UPDATE_PRODUCT:

            index = state.findIndex(product => {
                return action.product.MaHang === product.MaHang
            });
            state = [
                ...state.slice(0, index),
                action.product,
                ...state.slice(index + 1, state.length)
            ]
            return [...state]   
        default:
            return state
    }
}

export default product;

