import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';

const AddItem = (props) => {
    const { addItem } = props;
    const [newItem,setNewItem] = useState('');
    
    return (
        <View style={styles.addItemView}>
            <TextInput style={styles.textInput} placeholder='Insert an item' onChangeText={(text)=> setNewItem(text)}></TextInput>
            <Button style={styles.color} onPress={() => addItem(newItem)} title="Add " />
        </View>
    );
};
const styles = StyleSheet.create({
    addItemView: {

    },
    textInput: {
        height: 40,
        marginVertical:10,
        marginHorizontal:2,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        color: 'green',
        padding: 10,
        marginBottom:10,

    },

});

export default AddItem;
