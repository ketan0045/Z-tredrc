import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant"

export const addToCard = (data) => {
    console.log(data,"addToCard")
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCard = (data) => {
    console.log(data,"removeToCard")
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCard = () => {
    console.log("emptyCard")
    return {
        type: EMPTY_CART,
    }
}


