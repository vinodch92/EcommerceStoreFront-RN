import React from 'react';
import { shallow } from 'enzyme';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  describe('Rendering', () => {
    const wrapper = shallow(<ProductCard />);
    it('renders component correctly', () => {
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(View).length).toEqual(2);
      expect(wrapper.find(Text).length).toEqual(2);
      expect(wrapper.find(FastImage).length).toEqual(1);

      wrapper.setProps({ productData: { name: 'Brown eggs' } });
      expect(wrapper.find(View).length).toEqual(2);
      expect(wrapper.find(Text).length).toEqual(2);
      expect(wrapper.find(FastImage).length).toEqual(1);

      wrapper.setProps({
        productData: {
          name: 'Brown eggs',
          image:
            'https://raw.githubusercontent.com/vinodch92/ECommerceProductImages/master/images/storeFront/0.jpg',
        },
      });
      expect(wrapper.find(View).length).toEqual(2);
      expect(wrapper.find(Text).length).toEqual(2);
      expect(wrapper.find(FastImage).length).toEqual(1);

      wrapper.setProps({
        productData: {
          name: 'Brown eggs',
          image:
            'https://raw.githubusercontent.com/vinodch92/ECommerceProductImages/master/images/storeFront/0.jpg',
          rating: 4,
        },
      });
      expect(wrapper.find(View).length).toEqual(2);
      expect(wrapper.find(Text).length).toEqual(2);
      expect(wrapper.find(FastImage).length).toEqual(1);
    });
  });
});
