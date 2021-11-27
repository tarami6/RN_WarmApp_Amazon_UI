import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Button = ({ text, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={styles.root}
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#e47911',
        marginVertical: 10,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a15e1b'
    },
    text: {
        fontWeight: 'bold'
    }
})

export default Button;