import React, { useContext } from "react"
import { StyleSheet, View, Text, Modal } from "react-native";
import { TimeContext } from "../../context/TimeContext";
import Button from "./Button";
import { secondsTohhmmss } from "./Stopwatch";

const FinishModal = (props) => {

    const timeContext = useContext(TimeContext);

    return (
    <Modal
        transparent={true}
        visible={props.isVisible}
        onRequestClose={()=>{setFinishModalVisible(!finishModalVisible)}}>
            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 10}}>
                <View style={styles.modal}>
                    <Text style={[styles.modalTitle, {paddingBottom: 0}]}>You win!</Text>
                    <Text style={{fontSize: 18, textAlign: 'center', paddingBottom: 10}}>
                        You completed the {props.difficulty == 2 ? 'easy': (props.difficulty == 1 ? 'medium' : 'hard')} Sudoku in:
                    </Text>
                    <Text style={{fontSize: 28, fontWeight: 'bold', fontFamily: 'monospace', paddingBottom: 10}}>
                        {secondsTohhmmss(timeContext.time)}
                    </Text>
                    <Button text='Continue' onPress={props.onPressContinue}/>
                </View>
            </View>
        </Modal>
    );
}

export default FinishModal;

const styles = StyleSheet.create({
    modal:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        elevation: 10,
        shadowColor: '#000000',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 5,
        padding: 20,
    },
    modalTitle:{
        fontFamily: 'monospace',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000000',
        paddingBottom: 40
    },
});
