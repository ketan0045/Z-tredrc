const initialState = {
    isLoggedUser: null
}

const isLogged = (state = initialState, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return { ...state, isLoggedUser: action.payload }
        case "SIGN_OUT":
            return { ...state, isLoggedUser: null }
        default:
            return state;
    }
}

export default isLogged
