import { Button, Modal, View } from "react-native";

const TextModal = (props) => {
    return ( 
        <Modal visible={props.visible}>
            {/* props.children affiche le contenu entre les balises */}
            {props.children}
            <View>
                <Button
                    title="close Modal"
                    onPress={props.closeModal}
                />
            </View>
        </Modal>
     );
}
 
export default TextModal;