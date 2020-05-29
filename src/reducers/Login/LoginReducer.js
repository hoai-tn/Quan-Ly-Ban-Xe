
import * as Types from '../../constants/ActionTypes';

const initialState = [];
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_LOGIN:
           state = action.login;
        return state;
        default:
            return state
    }
}
export default LoginReducer;