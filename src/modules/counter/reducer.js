import { ActionTypes } from './actions';

//
// Counter Reducer
//

const defaultState = 0;

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.Increment:
            return state + 1;
        case ActionTypes.Decrement:
            return state - 1;
        default:
            return state;
    }
};

export default reducer;
