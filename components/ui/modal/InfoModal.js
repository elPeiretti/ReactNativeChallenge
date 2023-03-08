import React from "react";
import DefaultModalStyle from "./DefaultModalStyle";
import { Modal, View, Text } from "react-native";
import Button from "../Button";

const InfoModal = (props) => {
    return (
        <Modal
            transparent={true}
            visible={props.isVisible}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>About</Text>
                        <Button text='Close' onPress={props.onClosePressed}/>
                    </View>
                </View>
        </Modal>
    );
}

export default InfoModal;

const styles = DefaultModalStyle;