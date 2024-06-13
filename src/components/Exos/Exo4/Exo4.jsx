import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

const Exo4 = ({navigation}) => {
    const contacts = [
        {id: 1, name: "Doe", firstname: "John", number: "555-834-4953"},
        {id: 2, name: "Smith", firstname: "Jerry", number: "555-395-4861"},
        {id: 3, name: "Johnson", firstname: "Owen", number: "555-423-7539"},
        {id: 4, name: "Brown", firstname: "Rembrant", number: "555-869-4257"},
        {id: 5, name: "Wilson", firstname: "Paul", number: "555-418-2349"},
        {id: 6, name: "Martinez", firstname: "Brian", number: "555-183-6428"},
        {id: 7, name: "Taylor", firstname: "Harry", number: "555-013-4963"},
        {id: 8, name: "Anderson", firstname: "Thomas", number: "555-031-2741"},
    ];

    return ( 
        <>
        <FlatList
                data={contacts}
                renderItem={itemData => {
                    return <TouchableOpacity 
                        onPress={() => navigation.navigate('DetailContact', {
                            contact: itemData.item, 
                        })}>
                            <Text style={styles.text}>{itemData.item.name}</Text>
                        </TouchableOpacity>
                }}
            />
        </>
     );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
    }
})
 
export default Exo4;