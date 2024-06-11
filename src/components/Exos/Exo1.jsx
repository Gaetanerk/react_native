import { StyleSheet, Image, SafeAreaView, ScrollView, Text, View } from "react-native";

const Exo1 = () => {
    return ( 
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View style={styles.viewImage}>
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
            </ScrollView>
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'beige',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: "auto",
    },
    viewImage: {
        marginTop: 50,
        marginBottom: 50,
    },
    viewDetails: {
        marginBottom: 50,
    },
    text: {
        marginLeft: 30,
        fontSize: 20,
    },
    bold: {
        fontWeight: 'bold',
    }
})
 
export default Exo1;