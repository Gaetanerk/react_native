import { StyleSheet, Image, SafeAreaView, ScrollView, Text, View, Button } from "react-native";

const Exo1 = () => {
    return ( 
        <View>
            <View>
                <Image style={styles.image} source={{uri : 'https://reactnative.dev/img/tiny_logo.png',}} />
            </View>
            <View style={styles.viewDetails}>
                <Text style={styles.text}>Nom : 
                    <Text style={styles.bold}> Capitaine</Text>
                </Text>
                <Text style={styles.text}>Prénom : 
                    <Text style={styles.bold}> Haddock</Text>
                </Text>
                <Text style={styles.text}>Téléphone : 
                    <Text style={styles.bold}> 01.23.45.67.89</Text>
                </Text>
                <Text style={styles.text}>Adresse : 
                    <Text style={styles.bold}> 35 rue des pias 59200 Tourcoing</Text>
                </Text>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: "auto",
    },
    viewDetails: {
        marginTop: 20,
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
    bold: {
        fontWeight: 'bold',
    }
})
 
export default Exo1;