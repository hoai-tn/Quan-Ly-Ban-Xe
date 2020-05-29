import * as Types from '../../constants/ActionTypes';

const InitialState = []
const producers  = (state = InitialState, action) => {
    let index = -1;
    switch (action.type) {
        case Types.FETCH_PRODUCERS:
            return [...action.producers]
        case Types.DELETE_PRODUCER:
             index = state.findIndex(producer => {
                return action.id === producer.MaNhaCC
            })
            if(index >= 0)
                state.splice(index, 1);
            
            return [...state]
        case Types.ADD_PRODUCER:
            state.push(action.producer);
            return [...state]
        case Types.UPDATE_PRODUCER:

            index = state.findIndex(producer => {
                return action.producer.MaNhaCC === producer.MaNhaCC
            });
            state = [
                ...state.slice(0, index),
                action.producer,
                ...state.slice(index + 1, state.length)
            ]
            return [...state]
        default:
            return state
    }
}

export default producers;

