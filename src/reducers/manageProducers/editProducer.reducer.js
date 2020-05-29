import * as Types from '../../constants/ActionTypes';

const initialState = {}

const editReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.EDIT_PRODUCT:
            return action.product
        case Types.RESET_EDIT_PRODUCT:
            return initialState;
        default:
            return state
    }
}

export default editReducer;