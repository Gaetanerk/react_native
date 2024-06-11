import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import Exo1 from "./components/Exos/Exo1";

const App = () => {
    return ( 
        // SafeAreaView est utilisé pour s'assurer que le contenu qui dépasse de l'écran ne sera pas coupé
        <SafeAreaView>
            {/* ScollView permer de faire défiler le contenu qui dépasse de l'écran*/}
            <ScrollView /*style={styles.container}*/>
                {/* View permet de créer des mises en pages équivalent au div sans scroll */}
                <View>
                    <Text>Les composants de base à react native</Text>
                    <Text>Un autre texte</Text>
                </View>
                <View>
                    <Text>Image</Text>
                    <Image style={styles.image} source={{uri : 'https://reactnative.dev/img/tiny_logo.png',}} />
                </View>
                <Home />
                <Exo1 />
            </ScrollView>
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    container: {
        flex: 1,
        marginTop: 25,
    },
})
 
export default App;