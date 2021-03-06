import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = (props) => {
    const { item,deleteItems } = props;
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>
                    {item.text}
                </Text>
                <Icon name="remove" size={30} color="#900" onPress={() =>  deleteItems(item.id)} />
            </View>

        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderColor: 'eee#',
        borderBottomWidth: 1,

    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,

    }
});

export default ListItem;
