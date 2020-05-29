import * as Types from '../../constants/ActionTypes';
const initialState = false;

const reducerIsLogin = (state = initialState, action) => {
    switch(action.type) {
        case Types.LOGOUT:
            return initialState;
        case Types.LOGIN:
            return true;
        default:
            return state;
    }
    
}

export default reducerIsLogin;