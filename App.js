import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{

    paddingTop:60,
  }
});

export default App;
