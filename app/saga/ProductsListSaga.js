import { put, call, takeLatest } from 'redux-saga/effects';
import { productsLists } from '../service/productsServices';
import { ProductsState } from '../state';

export function* getProductsLists(action) {
  const apiResponse = yield call(productsLists, action.payload);
  if (apiResponse.response_type === 'success') {
    yield put(ProductsState.saveProducts(apiResponse.response.products));
  }
}

export function* watchProductsList() {
  yield takeLatest('GET_PRODUCTS_LIST', getProductsLists);
}
