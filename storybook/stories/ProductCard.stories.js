import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ProductCard } from '../../app/components';

const productData = {
  name: 'Brown eggs',
  image:
    'https://raw.githubusercontent.com/vinodch92/ECommerceProductImages/master/images/storeFront/0.jpg',
  rating: 4,
};

storiesOf('ProductCard', module)
  .add('Default', () => <ProductCard />)
  .add('With Data', () => <ProductCard productData={productData} />);
