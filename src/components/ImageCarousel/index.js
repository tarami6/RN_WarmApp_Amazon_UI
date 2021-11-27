import React, { useState, useCallback } from 'react';
import { View, Image, FlatList, StyleSheet, useWindowDimensions } from 'react-native'


const ImageCarousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const ww = useWindowDimensions().width
    const onFlatlistUpdate = useCallback(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0);
        }
        console.log(viewableItems);
    }, []);

    const onViewRef = React.useRef((viewableItems)=> {
        console.log(viewableItems)
        onFlatlistUpdate(viewableItems)
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
  
    return (
        <View>
            <FlatList
                data={images}
                renderItem={({ item }) => (
                    <Image
                        style={[styles.image, { width: ww - 40 }]}
                        source={{ uri: item }}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={ww - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
            />
            <View style={styles.dots}>
                {
                    images.map((image, index) =>
                        <View style={[styles.dot, {
                            backgroundColor: index === activeIndex ? '#c9c9c9' : '#e0e0e0'
                        }]} />
                    )
                }
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    root: {

    },
    image: {
        height: 250,
        resizeMode: 'contain',
        margin: 10
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        margin: 5,
        backgroundColor: '#e0e0e0'
    },
    dots: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    }
})

export default ImageCarousel;