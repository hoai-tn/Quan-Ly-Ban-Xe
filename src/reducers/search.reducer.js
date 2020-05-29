import * as Types from '../constants/ActionTypes'
const SearchInitialState = '';
const Search = (state = SearchInitialState, action) => {
    switch (action.type) {
        case Types.SEARCH:
            return action.value.toLowerCase();
        default:
            return state
    }
}
export default Search;