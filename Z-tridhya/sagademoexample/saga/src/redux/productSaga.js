import { put, takeEvery } from 'redux-saga/effects'
import { PRODUCT_LIST, SEACH_PRODUCT, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
    let data = yield fetch("http://localhost:3500/products");
    data = yield data.json();
    yield put({ type: SET_PRODUCT_LIST, data })
}

function* searchProducts(data) {
    let result  = yield fetch(`http://localhost:3500/products?q=${data.serchitem}`);
    result  = yield result.json();
    yield put({ type: SET_PRODUCT_LIST, data:result  })
    // yield put({ type: SET_PRODUCT_LIST, data:result  }) serching
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEACH_PRODUCT, searchProducts)
}
export default productSaga













       

