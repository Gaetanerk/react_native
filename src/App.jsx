import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Exo1 from "./components/Exos/Exo1";

const App = () => {
    return ( 
        <View style={styles.containerExo1}>
            <Exo1 />
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
});
 
export default App;