import * as Types from '../../constants/ActionTypes';

const InitialState = false;

const displayForm = (state = InitialState, action) => {
    switch (action.type) {
        case Types.TOGGLE_FORM:
            return !state
        case Types.CLOUSE_FORM:
            return false;
        case Types.OPEN_FORM:
            return true;
        default:
            return state
    }
}

export default displayForm;