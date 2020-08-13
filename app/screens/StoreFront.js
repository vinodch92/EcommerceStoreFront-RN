import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from '../components';
import { ProductsState } from '../state';

const StoreFront = () => {
  const dispatch = useDispatch();

  const products = useSelector(ProductsState.selectProductsList);

  React.useEffect(() => {
    callProductsListApi();
  }, []);

  const callProductsListApi = () => dispatch({ type: 'GET_PRODUCTS_LIST', payload: '' });

  const renderCard = ({ item }) => <ProductCard productData={item} />;

  return (
    <SafeAreaView style={styles.layout}>
      <FlatList
        keyboardShouldPersistTaps="handled"
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCard}
      />
    </SafeAreaView>
  );
};

export default StoreFront;

const styles = StyleSheet.create({
  layout: { flex: 1 },
});
