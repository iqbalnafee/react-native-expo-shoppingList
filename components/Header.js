import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello Brinto
      </Text>
      <Image style={styles.img} source={{ uri: 'https://randomuser.me/api/portraits/men/68.jpg' }} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'blue',
    fontSize: 50
  },
  img:{
    width:100,
    height:100,
    borderRadius:10 / 2,
  }
});
export default Header;
