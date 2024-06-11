import { useState } from "react";
import { Button, FlatList, Text, TextInput } from "react-native";
import TextModal from "./TextModal";

const SecondDemo = () => {
    const [textInput, setTextInput] = useState('');
    const [visible, setVisible] = useState(false);

    function messageConsole() {
        console.log("Clique sur le bouton");
        setVisible(true);
    }

    const tab = [
        {text: "Toto", id: 1},
        {text: "Tata", id: 2},
        {text: "Titi", id: 3},
    ]

    function recupInput(text) {
        console.log(text);
        setTextInput(text);
    }

    function closeModal() {
        setVisible(false);
    }

    return ( 
        <>
            <Text>SecondDemo</Text>
            <Button title="Click me" onPress={messageConsole} />
            <TextModal visible={visible} closeModal={closeModal}>
                <Text>Test</Text>
            </TextModal>
            <FlatList
                data={tab}
                // Définit le rendu de chaque élément de la liste
                renderItem={itemData => {
                    return <Text>{itemData.item.id} : {itemData.item.text}</Text>
                }}
                //Définit la clé unique pour chaque élément de la liste
                keyExtractor={(_, index) => {
                    return index
                }}
            />
            <TextInput
                placeholder="Entrez votre texte"
                value={textInput}
                onChangeText={recupInput}
            />
        </>
    );
}
 
export default SecondDemo;