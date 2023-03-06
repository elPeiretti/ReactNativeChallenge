import React from "react";
import { Modal, View, Text } from "react-native"
import DefaultModalStyle from "./DefaultModalStyle";
import Button from "./Button";

const PauseModal = (props) => {
    return (
        <Modal
            transparent={true}
            visible={props.isVisible}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Game paused</Text>
                        <Button text='Resume' onPress={props.onResumePressed}/>
                        <Button text='Exit' color='#ffd6d6' onPress={props.onExitPressed}/>
                    </View>
                </View>
        </Modal>
    );
}

export default PauseModal;

const styles = DefaultModalStyle;