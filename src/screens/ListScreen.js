import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {
            name: 'Friend #1',
            age: 20
        },
        {
            name: 'Friend #2',
            age: 45
        },
        {
            name: 'Friend #3',
            age: 50
        },
        {
            name: 'Friend #4',
            age: 33
        },
        {
            name: 'Friend #5',
            age: 44
        },
        {
            name: 'Friend #6',
            age: 55
        },
        {
            name: 'Friend #7',
            age: 66
        },
        {
            name: 'Friend #8',
            age: 77
        },
        {
            name: 'Friend #9',
            age: 19
        }
    ]
    return (
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {

                return (
                    <View>
                        <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>

                    </View>
                )

            }} />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;