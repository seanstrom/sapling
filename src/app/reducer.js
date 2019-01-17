import { ActionTypes } from './actions';
import counterReducer from '../modules/counter/reducer';

//
// App Reducer
//

const defaultState = {
    counterA: 0,
    counterB: 0
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ActionTypes.CounterA:
            return {
                ...state,
                counterA: counterReducer(state.counterA, action.payload)
            }
        case ActionTypes.CounterB:
            return {
                ...state,
                counterB: counterReducer(state.counterB, action.payload)
            }
        default:
            return state;
    }
};

export default reducer;
