import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = ({ title, id, removeItemFromList }) => {
    return (
        <TouchableOpacity onPress={() => removeItemFromList(id)}>
            <View style={{justifyContent: 'center'}}>
                <Text style={styles.goalItem}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#c3c3c3',
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'black' 
    }
})

export default GoalItem;