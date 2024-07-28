import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant"

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data] 
        case REMOVE_FROM_CART:
            console.log(REMOVE_FROM_CART, action)
            const remainingItems = data.filter((item) => (item.id !== action.data));
            // data.length = data.length ? data.length - 1 : []
            return [...remainingItems]
        case EMPTY_CART:
            data = []
            return [...data]
        default:
            return data
    }
}

