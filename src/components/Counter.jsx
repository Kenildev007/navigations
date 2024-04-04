import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Counter = ({ count, onIncrement, onDecrement }) => {
    return (
        <View style={styles.counter}>
            <TouchableOpacity onPress={onDecrement}>
                <Text style={styles.title}><Icon name="minuscircle" size={20} /></Text>
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity onPress={onIncrement}>
                <Text style={styles.title}><Icon name="pluscircle" size={20} /></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    counter: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        marginHorizontal:5,
        marginVertical: 5,
        
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        padding:5,
        
    },
};

export default Counter;
