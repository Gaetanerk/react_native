import { useState } from "react";
import { Image, View, StyleSheet, TextInput, Button, Modal } from "react-native";

const AddArticle = (props) => {
    const [textInput, setTextInput] = useState('');

    function recupInput(text) {
        setTextInput(text);
    };

    function addArticle() {
        props.setArticles([...props.articles, textInput]);
        props.setVisible(false);
        setTextInput('');
    }

    return ( 
        <Modal visible={props.visible}>
            {props.children}
            <View style={styles.container}>
                <View>
                    <Image 
                    style={styles.image} 
                    source={require('../../../assets/images/caddie.jpg')}
                    />
                </View>
                <View style={styles.viewTextInput}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Taper votre Article !!!!!"
                        value={textInput}
                        onChangeText={recupInput} />
                </View>
                <View style={styles.buttonRow}>
                    <View style={styles.btnAdd}>
                        <Button 
                            title="Ajouter article"
                            onPress={addArticle} />
                    </View>
                    <View style={styles.btnCancel}>
                        <Button 
                            color={'red'} 
                            title="Cancel"
                            onPress={props.cancelAddArticle} />
                    </View>
                </View>
            </View>
        </Modal>
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 120,
        margin: "auto",
    },
    viewTextInput: {
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        paddingLeft: 10,
        margin: 10,
        width: 300,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    btnAdd: {
        width: 180,
        marginRight: 10,
    },
    btnCancel: {
        width: 180,
        marginLeft: 10,
    }
})
 
export default AddArticle;