import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Alert, DatePickerAndroid } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';
import AddItem from './components/AddItem';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

  const [items, setItems] = useState([
    { id: uuid.v4(), text: 'Milk' },
    { id: uuid.v4(), text: 'Eggs' },
    { id: uuid.v4(), text: 'Bread' },
    { id: uuid.v4(), text: 'Juice' },
    { id: uuid.v4(), text: 'Mayo' },
  ]);

  const deleteItems = (delteItemId) => {

    setItems((items) => items.filter(f => f.id !== delteItemId))

  }

  const addItem = (itemText) => {
    if (itemText) {
      setItems((items) => [...items, { id: uuid.v4(), text: itemText }]);
    }
    else {
      Alert.alert(
        "Text Field Empty!",
        "Please add something",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }


  }

  return (

      <View style={styles.container}>
        <Header title={'Shopping '} />
        <AddItem addItem={addItem} />
        <FlatList data={items} renderItem={({ item }) => (
          <ListItem item={item} deleteItems={deleteItems} />
        )} />
      </View>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor:'green',
  }
});

export default App;
