import React, { useContext, useState } from "react"
import { StyleSheet, View, Text, Modal, TextInput } from "react-native";
import { TimeContext } from "../../../context/TimeContext";
import Button from "../Button";
import DefaultModalStyle from "./DefaultModalStyle";
import { secondsTohhmmss } from "../Stopwatch";
import { uploadScore } from "../../../persistence/repository/LeaderboardRepository";

const FinishModal = (props) => {

    const timeContext = useContext(TimeContext);
    const [playerName, onChangePlayerName] = useState('No-name')

    return (
    <Modal
        transparent={true}
        visible={props.isVisible}>
            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 10}}>
                <View style={styles.modal}>
                    <Text style={[styles.modalTitle, {paddingBottom: 0}]}>You win!</Text>
                    <Text style={{fontSize: 18, textAlign: 'center', paddingBottom: 10}}>
                        You completed the {props.difficulty == 2 ? 'easy': (props.difficulty == 1 ? 'medium' : 'hard')} Sudoku in:
                    </Text>
                    <Text style={{fontSize: 28, fontWeight: 'bold', fontFamily: 'monospace', paddingBottom: 10}}>
                        {secondsTohhmmss(timeContext.time)}
                    </Text>
                    {props.showSubmit ? (
                        <View style={{paddingBottom: 5}}>
                            <View style={{paddingBottom: 5}}>
                                <TextInput
                                   style={{borderWidth: 2, borderRadius: 10, paddingHorizontal: 10}}
                                   placeholder='Insert your name...'
                                   onChangeText={onChangePlayerName}/>
                            </View>
                            <Button text='Submit' onPress={()=>{
                                uploadScore(props.difficulty == 2 ? 'easy': (props.difficulty == 1 ? 'medium' : 'hard'), 
                                playerName, secondsTohhmmss(timeContext.time));
                                }}/>
                        </View>):null}
                    <Button text='Exit' onPress={props.onPressContinue}/>
                </View>
            </View>
        </Modal>
    );
}

export default FinishModal;

const styles = DefaultModalStyle;
