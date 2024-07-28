import { PRODUCT_LIST, SEACH_PRODUCT } from "./constant"

export const productList = () => {
    return {
        type: PRODUCT_LIST,
        data: "Empty data"
    }
}

export const productSearch = (serchitem) => {
    return {
        type: SEACH_PRODUCT,
        serchitem
    }
}
