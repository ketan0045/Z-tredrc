export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}

export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}

export const multNumber = (num) => {
    return {
        type: "MULTIPLY",
        payload: num
    }
}

export const devideNumber = () => {
    return {
        type: "DEVIDENATION"
    }
}

export const bgAlive = (color) => {
    return {
        type: "ALICE",
        payload: color
    }
}

export const bgWhite = (color) => {
    return {
        type: "WHITE",
        payload: color
    }
}

export const addCart = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

export const removeCart = (itemId) => {
    return {
        type: "REMOVE_CART"
    }
}

export const login = (username) => {
    return {
        type: "SIGN_IN",
        payload: username
        // payload: {username} Here object that access in app.js  {user.username}
    }
}

export const logout = () => {
    return {
        type: "SIGN_OUT"
    }
}




// calculator


export const add = (value) => {
    return {
        type: "ADD",
        payload: value,
    }
}

export const subtract = (value) => ({
    type: "SUBTRACT",
    payload: value,
});

export const multiply = (value) => ({
    type: "MULTIPLY",
    payload: value,
});

export const divide = (value) => ({
    type: "DIVIDE",
    payload: value,
});

export const clear = () => ({
    type: "CLEAR",
});
