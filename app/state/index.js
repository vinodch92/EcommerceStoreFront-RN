import { combineReducers } from 'redux';
import * as ProductsState from './ProductsState';

const rootReducer = combineReducers({
  products: ProductsState.productsSliceReducer,
});
export { rootReducer, ProductsState };
