const initialState = {
    changeBg: "white"
};

const backChange = (state = initialState, action) => {
    switch (action.type) {
        case "ALICE":
            return { ...state, changeBg: action.payload }
        case "WHITE":
            return { ...state, changeBg: action.payload }
        default:
            return state;
    }

}

export default backChange