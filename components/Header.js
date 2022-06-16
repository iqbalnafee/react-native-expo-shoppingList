import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = (props) => {
    const {title} = props;
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
        {title}
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

Header.defaultProps = {
    title:'Shopping List',
}
export default Header;
