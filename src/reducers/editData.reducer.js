import * as Types from '../constants/ActionTypes';

const initialState = {}

const editReducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.EDIT_DATA:
            return {...action.data}
        case Types.RESET_EDIT:
            return initialState;
        default:
            return state
    }
}

export default editReducer;