import React from 'react';
import { shallow } from 'enzyme';
import { FlatList, SafeAreaView } from 'react-native';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import StoreFront from '../StoreFront';

const mockProducts = [
  {
    name: 'Brown eggs',
    image:
      'https://raw.githubusercontent.com/vinodch92/ECommerceProductImages/master/images/storeFront/0.jpg',
    rating: 4,
  },
  {
    name: 'Sweet fresh stawberry',
    image:
      'https://raw.githubusercontent.com/vinodch92/ECommerceProductImages/master/images/storeFront/1.jpg',
    rating: 4,
  },
  {
    name: 'Asparagus',
    image:
      'https://raw.githubusercontent.com/vinodch92/ECommerceProductImages/master/images/storeFront/2.jpg',
    rating: 3,
  },
];

describe('StoreFront', () => {
  const dispatch = jest.fn();
  redux.useDispatch.mockReturnValue(dispatch);

  const sagaMiddleware = createSagaMiddleware();
  const mockStore = configureStore([sagaMiddleware]);

  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((fn) => fn());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
  });

  describe('Rendering', () => {
    const store = mockStore({
      products: mockProducts,
    });

    jest.spyOn(redux, 'useSelector').mockImplementationOnce(() => store.getState().products);
    const wrapper = shallow(<StoreFront />);
    it('renders component correctly', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(SafeAreaView).length).toEqual(1);
      expect(wrapper.find(FlatList).length).toEqual(1);

      const flatList = wrapper.find(FlatList);
      flatList.renderProp('renderItem')({ item: mockProducts[0] }, 0);
    });
  });
});
