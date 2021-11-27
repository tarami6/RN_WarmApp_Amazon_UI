import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';

const App = () => {
  return (
    <SafeAreaView >
      <StatusBar barStyle={'dark-content'} />
      <ProductScreen />
    </SafeAreaView>
  );
};


export default App;
