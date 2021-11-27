import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ProductItem from '../../components/ProductItem'

import products from '../../data/products'

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            {/* Rendet Product Componenet */}
        
            <FlatList
                data={products}
                renderItem={({item}) =>  <ProductItem item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 10
    }
})

export default HomeScreen;