import React,{useState} from 'react';
import { View, Text, StyleSheet, Image,FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import uuid from 'react-native-uuid';

const App = () => {

  const [items,setItems] = useState([
    {id:uuid.v4(),text:'Milk'},
    {id:uuid.v4(),text:'Eggs'},
    {id:uuid.v4(),text:'Bread'},
    {id:uuid.v4(),text:'Juice'},
  ]);

  const deleteItems = (delteItemId) => {

    setItems((items) =>  items.filter(f => f.id !== delteItemId))

  }

  return (
    <View style={styles.container}>
      <Header title={'Shopping List'}/>
      <FlatList data={items} renderItem={({item}) => (
        <ListItem item={item} deleteItems={deleteItems}/>
      )} />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:60,
  }
});

export default App;
