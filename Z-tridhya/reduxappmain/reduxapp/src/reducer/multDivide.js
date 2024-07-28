const initialState = 5;

const multiplyAction = (state = initialState, action) => {
    switch (action.type) {
        case "MULTIPLY":
            return state * action.payload
        case "DEVIDENATION":
            return state / 5
        default:
            return state;
    }
}

export default multiplyAction

