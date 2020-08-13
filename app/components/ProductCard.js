import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { images } from '../assets';
import config from '../config';

/**
 * This is ProductCard functional component for showing a product in a card
 * @param {*} productData : object of a product
 */
const ProductCard = ({ productData }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <FastImage
          resizeMode="cover"
          style={styles.productImage}
          source={{ uri: productData?.image }}
          fallback
          defaultSource={images.placeholder}
        />
        <Text style={styles.productName}>{`${productData?.name ?? ''}`}</Text>
        <Text style={styles.productRating}>{`Rating: ${productData?.rating ?? 0}`}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: config.colors.white,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: config.colors.cardShadow,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  cardContent: { marginHorizontal: 15, marginVertical: 10 },
  productImage: { width: '100%', height: 150, alignSelf: 'center' },
  productName: { marginTop: 15, alignSelf: 'center', fontSize: 17, fontWeight: '600' },
  productRating: {
    marginTop: 15,
    fontSize: 14,
    color: config.colors.ratingGreen,
    fontWeight: '400',
  },
});
