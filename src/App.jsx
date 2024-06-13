import { StyleSheet, View } from "react-native";
import Exo1 from "./components/Exos/Exo1/Exo1";
import Exo2 from "./components/Exos/Exo2/Exo2";
import Exo3 from "./components/Exos/Exo3/Exo3";
import SecondDemo from "./components/SecondDemo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ScreenA from "./screens/ScreenA";
import ScreenB from "./screens/ScreenB";
import ScreenC from "./screens/ScreenC";
import Exo4 from "./components/Exos/Exo4/Exo4";
import DetailContact from "./components/Exos/Exo4/DetailContact";

//Package pour la navigaion :
//npm install @react-navigation/native
//npm install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native-stack

const Stack = createNativeStackNavigator();

const App = () => {
    return ( 
        // <View style={styles.containerExo1}>
        //     <Exo1 />
        // </View>
        // <View>
        //     <SecondDemo />
        // </View>
        // <View style={styles.containerExo2}>
        //     <Exo2 />
        // </View>
        // <View style={styles.containerExo2}>
        //     <Exo3 />
        // </View>
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="EcranC">
        //         <Stack.Screen name="EcranA" component={ScreenA} options={{title: "Page A"}} />
        //         <Stack.Screen name="EcranB" component={ScreenB} />
        //         <Stack.Screen name="EcranC" component={ScreenC} />
        //     </Stack.Navigator>
        // </NavigationContainer>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Exo4">
                <Stack.Screen name="Exo4" component={Exo4} options={{ headerShown: false }}/*{options={{ headerShown: false }} Supprime l'entête}*/ />
                <Stack.Screen name="DetailContact" component={DetailContact} />
            </Stack.Navigator>
        </NavigationContainer>
     );
}

const styles = StyleSheet.create({
    containerExo1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'beige',
    },
    containerExo2: {
        flex: 1,
    },
    containerExo2: {
        flex: 1,
        backgroundColor: 'black',
    },
});
 
export default App;