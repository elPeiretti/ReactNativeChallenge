import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import Button from './Button';
import IconButton from './IconButton';
import NumberButton from './NumberButton';
import SudokuBoard from './SudokuBoard';

const GameScreen = () => {

    const [timeInSeconds, setTimeInSecods] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    function showPauseModal(){
        //TODO -> pause timer
        setModalVisible(true);
    }
    function hidePauseModal(){
        //TODO -> resume timer
        setModalVisible(false);
    }

    return (
        <View style={{flex: 1}}>
            <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={()=>{setModalVisible(!modalVisible)}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.pauseModal}>
                        <Text style={styles.modalTitle}>Game paused</Text>
                        <Button text='Resume' onPress={hidePauseModal}/>
                        <Button text='Exit' color='#ffd6d6'/>
                    </View>
                </View>
            </Modal>
            <View style={{flexDirection: 'row', alignSelf: 'flex-end', paddingEnd: 15, paddingTop: 30}}>
                <Text style={styles.stopwatch}>
                    {new Date(timeInSeconds*1000).toISOString().substring(11,19)}
                </Text>
                <TouchableOpacity style={styles.pauseButton} onPress={showPauseModal}>
                    <Text style={{fontWeight: 'bold', color: '#000000'}}>| |</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.board}>
                <SudokuBoard/>
            </View>
            <View style={styles.buttons}>
                <IconButton text='erase' image={require('./icons/eraser.png')}/>
                <IconButton text='annotate' image={require('./icons/annotate.png')}/>
                <IconButton text='hint' image={require('./icons/hint.png')}/>
            </View>
            <View style={styles.numbers}>
                {[1,2,3,4,5,6,7,8,9].map(n => (
                    <NumberButton number={n}/>
                ))}
            </View>

        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    stopwatch:{
        alignSelf: 'center',
        paddingEnd: 15,
        fontSize: 20
    },
    pauseButton:{
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#ffe8aa'
    },
    pauseModal:{
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
    board:{
        paddingTop: 40
    },
    buttons:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 50
    },
    numbers:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 20
    }
});