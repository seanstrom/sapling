//
// Action Types
//

const ActionTypes = {
    Decrement: Symbol('DECREMENT'),
    Increment: Symbol('INCREMENT')
};

//
// Action Creators
//

const increment = () => ({
    type: ActionTypes.Increment
});

const decrement = () => ({
    type: ActionTypes.Decrement
});

export { ActionTypes, decrement, increment };
