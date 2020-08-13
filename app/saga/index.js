import { all, fork } from 'redux-saga/effects';
import { watchProductsList } from './ProductsListSaga';

export default function* rootSaga() {
  yield all([fork(watchProductsList)]);
}
