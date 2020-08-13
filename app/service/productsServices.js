import { apiRequest } from './service';
import { PRODUCTS_LIST } from './apiUrls';

export const productsLists = () =>
  apiRequest({
    apiUrl: PRODUCTS_LIST,
    method: 'GET',
  });
