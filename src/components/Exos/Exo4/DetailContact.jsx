import { useLayoutEffect } from "react";
import { Button, Linking, Text } from "react-native";

const DetailContact = ({navigation, route}) => {
    const id = route.params.id;
    const name = route.params.name;
    const firstname = route.params.firstname;
    const number = route.params.number;

    function handleCallPress() {
        Linking.openURL('tel:' + number);
    }

    useLayoutEffect(() => {
        navigation.setOptions({title: name});
    });

    return ( 
        <>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{firstname}</Text>
            <Text>{number}</Text>
            <Button title='Appeler' onPress={handleCallPress} />
        </>
     );
}
 
export default DetailContact;