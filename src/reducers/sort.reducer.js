import * as Types from '../constants/ActionTypes';
const sortInitialState = {by:'name', value: 1}
const sort = (state = sortInitialState, action) => {
    switch (action.type) {
        case Types.SORT:
            return action.sortText
        default:
            return state
    }
}
export default sort;