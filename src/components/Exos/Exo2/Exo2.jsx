import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from "react-native";
import AddArticle from "./AddArticle";
import { useState, useEffect } from "react";

const Exo2 = () => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState(true);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setMessage(articles.length === 0);
    }, [articles]);

    function openModalArticle() {
        setVisible(true);
    }

    function cancelAddArticle() {
        setVisible(false);
    }

    function deleteArticle(index) {
        setArticles((currentArticles) => {
            return currentArticles.filter((_, i) => i !== index);
        });
    }

    return ( 
        <View style={styles.container}>
            <View style={styles.titre}>
                <Text style={styles.textTitre}>Ma liste de course :</Text>
                <Text style={styles.textMessage}>{message ? "Aucun article dans votre liste de courses." : ""}</Text>
            </View>
            <View style={styles.listArticle}>
                <FlatList
                    data={articles}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity style={styles.btnArticle} onPress={() => deleteArticle(index)}>
                            <Text style={styles.btnText}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(_, index) => index.toString()}
                />
            </View>
            <View style={styles.button}>
                <Button 
                    title="Ajouter article"
                    onPress={openModalArticle} />
            </View>
            <View>
                <AddArticle 
                    visible={visible} 
                    setVisible={setVisible}
                    cancelAddArticle={cancelAddArticle}
                    setArticles={setArticles}
                    articles={articles}
                />
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titre: {
        alignItems: 'center',
    },
    textTitre: {
        fontSize: 40,
        marginTop: 20,
    },
    textMessage: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    listArticle: {
        alignItems: 'center',
    },
    btnArticle: {
        marginBottom: 20,
        width: 400,
        backgroundColor: '#5e0acc',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    button: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
    }
})
 
export default Exo2;
