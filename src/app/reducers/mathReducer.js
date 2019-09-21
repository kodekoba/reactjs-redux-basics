const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state, // want to spread all of your state then just update what you need to update
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload],
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload],
            }
            break;
    }
    return state;
};

export default mathReducer;