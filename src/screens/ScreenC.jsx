import { Button, Text, View } from "react-native";

const ScreenC = ({navigation}) => {
    return ( 
        <View>
            <Text>ScreenC</Text>
            <Text>On va rajouter un bouton vers la page ScreenA</Text>
            <Button title="Aller vers ScreenA" onPress={() => navigation.navigate('EcranA')} />
            <Text>On va rajouter un bouton vers la page ScreenB avec un params value qui contient toto</Text>
            <Button title="Aller vers ScreenB" onPress={() => navigation.navigate('EcranB', {value: 'toto'})} />
            <Text>On va rajouter un bouton vers la page ScreenB avec un params value qui contient toto</Text>
            <Button title="Aller vers ScreenB" onPress={() => navigation.navigate('EcranB', {value: 'tata', qt: 25})} />
        </View>
     );
}
 
export default ScreenC;