import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const ProductItem = ({ item }) => {

    return (
        <View style={styles.root}>
            <Image style={styles.image} source={{ uri: item.image }} />

            <View style={styles.rightContainer}>
                <Text style={styles.title} numberOfLines={3}>
                    {item.title}
                </Text>
                <View style={styles.ratingsContainer}>
                    {
                        [0,1,2,3,4].map((el, index) => (
                            <FontAwesome
                             key={index}
                              style={styles.star}
                               name={index < Math.floor(item.avgRating) ? 'star' : 'star-o'} 
                               size={18} 
                               color={'#e47911'} 
                               />
                        ))
                    }
                  
                    {/* <FontAwesome style={styles.star} name={'star'} size={18} color={'#e47911'} />
                    <FontAwesome style={styles.star} name={'star'} size={18} color={'#e47911'} />
                    <FontAwesome style={styles.star} name={'star-half-full'} size={18} color={'#e47911'} />
                    <FontAwesome style={styles.star} name={'star-o'} size={18} color={'#e47911'} /> */}
                    <Text>{item.ratings}</Text>
                </View>
                <Text style={styles.price}>
                    from ${item.price}
                    {
                        item.oldPrice &&
                        <Text style={styles.oldPrice}>  ${item.oldPrice}</Text>
                    }

                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 18
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 13,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    star: {
        margin: 2
    }
})

export default ProductItem;