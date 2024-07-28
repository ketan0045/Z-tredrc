const initialState = {
    inCartItem: []
}

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                inCartItem: [...state.inCartItem, action.payload],
              };
        case "REMOVE_CART":
            console.log(state.inCartItem.pop(),"state.inCartItem")
            return {
                ...state,
                inCartItem: state.inCartItem,
              };
        default:
            return state
    }

}
export default cardReducer




