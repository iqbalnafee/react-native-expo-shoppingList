import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        Hello Brinto
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
    header: {
    backgroundColor:'darkslateblue',
    padding:15,
    height:60,
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign:'center',
  },
});
export default Header;
