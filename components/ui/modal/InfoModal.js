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
                        <Text style={[styles.modalTitle, {paddingBottom: 10}]}>About</Text>
                        <Text style={{fontSize:16, textAlign: 'justify', paddingBottom: 20}}>
                            This app was created for the React Native challenge, which is a 10-day coding challenge I invented to test my learning and programming skills.
                        </Text>
                        <Text style={{fontSize:18, textAlign: 'justify', paddingBottom: 5}}>
                            - Normal mode: it's just a sudoku, you will have all the time you need to complete it.
                        </Text>
                        <Text style={{fontSize:18, textAlign: 'justify', paddingBottom: 20}}>
                            - Time-Trial mode: it's also a sudoku, but in this mode you will be racing against the clock.
                        </Text>
                        <Text style={{fontSize:18, textAlign: 'center', paddingBottom: 5}}>
                            Be advised, the impossible difficulty is literally impossible.
                        </Text>
                        <Button text='Close' onPress={props.onClosePressed}/>
                    </View>
                </View>
        </Modal>
    );
}

export default InfoModal;

const styles = DefaultModalStyle;