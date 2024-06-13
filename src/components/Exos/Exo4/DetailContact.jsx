import { Button, Linking, Text } from "react-native";

const DetailContact = ({route}) => {
        const id = route.params.id;
    const name = route.params.name;
    const firstname = route.params.firstname;
    const number = route.params.number;

    console.log(parseInt(number.replaceAll('-', '')));

    function handleCallPress() {
        Linking.openURL('tel:' + number);
    }

    return ( 
        <>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{firstname}</Text>
            <Text>{number}</Text>
            <Button title={number} onPress={handleCallPress} />
        </>
     );
}
 
export default DetailContact;