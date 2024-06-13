import { useLayoutEffect } from "react";
import { Button, Linking, Text } from "react-native";

const DetailContact = ({navigation, route}) => {
    const contact = route.params.contact;

    function handleCallPress() {
        Linking.openURL('tel:' + contact.number);
    }

    useLayoutEffect(() => {
        navigation.setOptions({title: contact.name});
    });

    return ( 
        <>
            <Text>{contact.id}</Text>
            <Text>{contact.name}</Text>
            <Text>{contact.firstname}</Text>
            <Text>{contact.number}</Text>
            <Button title='Appeler' onPress={handleCallPress} />
        </>
     );
}
 
export default DetailContact;