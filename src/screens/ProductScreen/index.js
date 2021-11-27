import React, { useState } from 'react';
import { View, Text } from 'react-native'
import styles from './styles'
import prodcut from '../../data/product'
import { Picker } from '@react-native-picker/picker'
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';


const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(prodcut?.options && prodcut?.options[0] || null)
    const [quantity, setQuantity] = useState(1)

   

    return (
        <View style={styles.root}>
            <Text style={styles.title}>
                {prodcut.title}
            </Text>
            <ImageCarousel images={prodcut.images}/>
            <Picker
                selectedValue={selectedOption}
                onValueChange={setSelectedOption}
            >
                {prodcut?.options?.map((option, index) =>
                    <Picker.Item key={index} label={option} value={option} />
                )}
            </Picker>
            <Text style={styles.price}>
                from ${prodcut.price}
                {
                    prodcut.oldPrice &&
                    <Text style={styles.oldPrice}>  ${prodcut.oldPrice}</Text>
                }
            </Text>
            <Text style={styles.description}>
                {prodcut.description}
            </Text>
            <QuantitySelector
                quantity={quantity}
                setQuantity={setQuantity}
            />
            <Button text={'Add to card'} onPress={() => console.log('hello')} />
            <Button text={'By now'} onPress={() => console.log('hello')} />
        </View>
    );
};

export default ProductScreen;