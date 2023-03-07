import React from "react"
import {View, Text, Modal } from "react-native";
import Button from "../Button";
import DefaultModalStyle from "./DefaultModalStyle";
import { secondsTohhmmss } from "../Stopwatch";

const TimeReachedModal = (props) => {

    return (
    <Modal
        transparent={true}
        visible={props.isVisible}>
            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 10}}>
                <View style={styles.modal}>
                    <Text style={[styles.modalTitle, {paddingBottom: 0}]}>You lost :(</Text>
                    <Text style={{fontSize: 18, textAlign: 'center', paddingBottom: 30}}>
                        Your time has run out</Text>
                    <Button text='Continue' onPress={props.onPressContinue}/>
                </View>
            </View>
        </Modal>
    );
}

export default TimeReachedModal;

const styles = DefaultModalStyle;
