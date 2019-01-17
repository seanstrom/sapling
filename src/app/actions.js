//
// Action Types
//

const ActionTypes = {
    CounterA: 'COUNTER_A',
    CounterB: 'COUNTER_B'
};

//
// Action Creator Wrapper
//

const wrapAction = (namespace, actionCreator) => (...args) => {
    const action = actionCreator(...args);

    const wrappedAction = {
        payload: action,
        type: namespace,
        meta: {
            isAction: true
        }
    }

    return wrappedAction;
};

export { ActionTypes, wrapAction };
