import { StyleSheet, View } from "react-native";
import Exo1 from "./components/Exos/Exo1/Exo1";
import Exo2 from "./components/Exos/Exo2/Exo2";
import SecondDemo from "./components/SecondDemo";

const App = () => {
    return ( 
        // <View style={styles.containerExo1}>
        //     <Exo1 />
        // </View>
        // <View>
        //     <SecondDemo />
        // </View>
        <View style={styles.containerExo2}>
            <Exo2 />
        </View>
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
});
 
export default App;