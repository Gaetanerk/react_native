import { useLayoutEffect } from "react";
import { Button, Linking, Text } from "react-native";

const ScreenA = ({navigation}) => {
    function handleCallPress() {
        Linking.openURL('tel:911');
    }

    // useLayoutEffect à la même fonction qu'un useEffect classique
    // il a pour subtilité de se déclancher AVANT le rendu du composant
    useLayoutEffect(() => {
        navigation.setOptions({title: "Appeler le 911"});
    });

    return ( 
        <>
            <Text>ScreenA</Text>
            <Button title="Appeler le 911" onPress={handleCallPress} />
        </>
     );
}
 
export default ScreenA;