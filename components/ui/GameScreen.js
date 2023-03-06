import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Modal, Pressable, Alert } from 'react-native';
import { ContextProvider, TimeContext } from '../../context/TimeContext';
import Button from './Button';
import IconButton from './IconButton';
import NumberButton from './NumberButton';
import Stopwatch from './Stopwatch';
import { SolutionGenerator } from './SudokuGenerator';

const GameScreen = ({route, navigation}) => {

    const difficulty = route.params;
    const [isCounting, setIsCounting] = useState(false);
    const [pauseModalVisible, setpauseModalVisible] = useState(false);
    const [finishModalVisible, setFinishModalVisible] = useState(false);
    const [timeInSeconds, setTimeInSecods] = useState(0);
    const [mode, setMode] = useState('write');
    const cell = {
        i: -1,
        j: -1,
        value: 2,
        notes: [[0,0,0],[0,0,0],[0,0,0]],
        visible: false,
        ok: false
    }

    //best thing that came to my mind without googling hehe
    const [matrix, setMatrix] = useState([
        [{...cell, i:0, j:0}, {...cell, i:0, j:1}, {...cell, i:0, j:2}, {...cell, i:0, j:3}, {...cell, i:0, j:4}, {...cell, i:0, j:5}, {...cell, i:0, j:6}, {...cell, i:0, j:7}, {...cell, i:0, j:8}],
        [{...cell, i:1, j:0}, {...cell, i:1, j:1}, {...cell, i:1, j:2}, {...cell, i:1, j:3}, {...cell, i:1, j:4}, {...cell, i:1, j:5}, {...cell, i:1, j:6}, {...cell, i:1, j:7}, {...cell, i:1, j:8}],
        [{...cell, i:2, j:0}, {...cell, i:2, j:1}, {...cell, i:2, j:2}, {...cell, i:2, j:3}, {...cell, i:2, j:4}, {...cell, i:2, j:5}, {...cell, i:2, j:6}, {...cell, i:2, j:7}, {...cell, i:2, j:8}],
        [{...cell, i:3, j:0}, {...cell, i:3, j:1}, {...cell, i:3, j:2}, {...cell, i:3, j:3}, {...cell, i:3, j:4}, {...cell, i:3, j:5}, {...cell, i:3, j:6}, {...cell, i:3, j:7}, {...cell, i:3, j:8}],
        [{...cell, i:4, j:0}, {...cell, i:4, j:1}, {...cell, i:4, j:2}, {...cell, i:4, j:3}, {...cell, i:4, j:4}, {...cell, i:4, j:5}, {...cell, i:4, j:6}, {...cell, i:4, j:7}, {...cell, i:4, j:8}],
        [{...cell, i:5, j:0}, {...cell, i:5, j:1}, {...cell, i:5, j:2}, {...cell, i:5, j:3}, {...cell, i:5, j:4}, {...cell, i:5, j:5}, {...cell, i:5, j:6}, {...cell, i:5, j:7}, {...cell, i:5, j:8}],
        [{...cell, i:6, j:0}, {...cell, i:6, j:1}, {...cell, i:6, j:2}, {...cell, i:6, j:3}, {...cell, i:6, j:4}, {...cell, i:6, j:5}, {...cell, i:6, j:6}, {...cell, i:6, j:7}, {...cell, i:6, j:8}],
        [{...cell, i:7, j:0}, {...cell, i:7, j:1}, {...cell, i:7, j:2}, {...cell, i:7, j:3}, {...cell, i:7, j:4}, {...cell, i:7, j:5}, {...cell, i:7, j:6}, {...cell, i:7, j:7}, {...cell, i:7, j:8}],
        [{...cell, i:8, j:0}, {...cell, i:8, j:1}, {...cell, i:8, j:2}, {...cell, i:8, j:3}, {...cell, i:8, j:4}, {...cell, i:8, j:5}, {...cell, i:8, j:6}, {...cell, i:8, j:7}, {...cell, i:8, j:8}],
    ]);
    const [solution, setSolution] = useState();
    const [selectedCell, setSelectedCell] = useState();

    useEffect(() => { 
        const game = SolutionGenerator(difficulty);
        var m = JSON.parse(JSON.stringify(matrix));
        for(var i = 0; i<9; i+=1){
            for (var j = 0; j<9; j+=1){
                m[i][j].value = game.board[i][j];
                m[i][j].visible = m[i][j].value !== 0;
                m[i][j].ok = m[i][j].value !== 0;
            }
        }
        setMatrix(m);
        setSolution(game.sol);
        setIsCounting(true);
    },[]);
    
    function showPauseModal(){
        setIsCounting(false);
        setpauseModalVisible(true);
    }
    function hidePauseModal(){
        setIsCounting(true);
        setpauseModalVisible(false);
    }
    function onNumberPressed(num) {
        var m = JSON.parse(JSON.stringify(matrix));
        var selectedCopy = m[selectedCell.i][selectedCell.j];
        if (selectedCopy.ok) return;

        if(mode == 'write'){
            selectedCopy.value = num;
            selectedCopy.visible = true;
            selectedCopy.ok = num == solution[selectedCopy.i][selectedCopy.j];
            selectedCopy.notes = [[0,0,0],[0,0,0],[0,0,0]];
        }
        else{
            // using if - else because ? operator breaks everything
            if (selectedCopy.notes[Math.floor((num-1)/3)][(num-1)%3] == 0)
                selectedCopy.notes[Math.floor((num-1)/3)][(num-1)%3] = 1;
            else{
                selectedCopy.notes[Math.floor((num-1)/3)][(num-1)%3] = 0;
            }
        }
                
        setMatrix(m);
        setSelectedCell(selectedCopy);
    }

    function secondsTohhmmss(t){
        return new Date(timeInSeconds*1000).toISOString().substring(11,19)
    }

    function checkAndFinish(){
        var finished = true;
        for(var i=0; i<9; i+=1){
            for(var j=0; j<9; j+=1){
                finished = matrix[i][j].ok;
            }
        }

        if (finished){
            setIsCounting(false);
            setFinishModalVisible(true);
        }
        else{
            Alert.alert('whoops!', 'You haven\'t finished yet!');
        }
    }

    return (
        <ContextProvider>
            <SafeAreaView style={{flex: 1}}>
                <Modal
                transparent={true}
                visible={pauseModalVisible}
                onRequestClose={()=>{setpauseModalVisible(!pauseModalVisible)}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={styles.modal}>
                            <Text style={styles.modalTitle}>Game paused</Text>
                            <Button text='Resume' onPress={hidePauseModal}/>
                            <Button text='Exit' color='#ffd6d6' onPress={() => navigation.reset({index:0, routes: [{name: 'MainScreen'}]})}/>
                        </View>
                    </View>
                </Modal>
                <Modal
                transparent={true}
                visible={finishModalVisible}
                onRequestClose={()=>{setFinishModalVisible(!finishModalVisible)}}>
                    <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 10}}>
                        <View style={styles.modal}>
                            <Text style={[styles.modalTitle, {paddingBottom: 0}]}>You win!</Text>
                            <Text style={{fontSize: 18, textAlign: 'center', paddingBottom: 10}}>
                                You completed the {difficulty == 2 ? 'easy': (difficulty == 1 ? 'medium' : 'hard')} Sudoku in:
                            </Text>
                            <Text style={{fontSize: 28, fontWeight: 'bold', fontFamily: 'monospace', paddingBottom: 10}}>
                                {secondsTohhmmss(timeInSeconds)}
                            </Text>
                            <Button text='Continue' onPress={()=>{navigation.reset({index:0, routes: [{name: 'MainScreen'}]})}}/>
                        </View>
                    </View>
                </Modal>
                <View style={{flexDirection: 'row', alignSelf: 'flex-end', paddingEnd: 15, paddingTop: 30}}>
                    <Stopwatch startTime={0} isCounting={isCounting}/>
                    <TouchableOpacity style={styles.pauseButton} onPress={showPauseModal}>
                        <Text style={{fontWeight: 'bold', color: '#000000'}}>| |</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boardContainer}>
                    <View style={styles.board}>
                        {matrix.map(row => (
                            <View style={styles.boardRow} key={row[0].i}>
                                {row.map(col => (
                                    <Pressable key={[col.i, col.j]}
                                        style={[
                                            styles.boardCell,
                                            col.j == 0 && {borderLeftWidth: 2},
                                            col.i == 0 && {borderTopWidth: 2},
                                            (col.i+1)%3 == 0 && {borderBottomWidth: 2},
                                            (col.j+1)%3 == 0 && {borderRightWidth: 2},
                                            selectedCell == col && {backgroundColor: '#d6f9ff', borderWidth: 1},
                                        ]}
                                        onPress={()=>{setSelectedCell(col)}}>
                                        {matrix[col.i][col.j].visible ? (
                                            <Text 
                                            style={[{fontSize:22},
                                                selectedCell === col && {color: '#000000', fontWeight: 'bold'},
                                                matrix[col.i][col.j].ok && {color: '#00c1ff'},
                                                !matrix[col.i][col.j].ok && {color: '#fe7878'}]}>
                                                    {col.value}
                                            </Text>) : 
                                            (<View key={[col.i,col.j]} style={{flexDirection: 'column', height: 40, width: 40, justifyContent: 'center', alignItems: 'center'}}>
                                                {matrix[col.i][col.j].notes.map((arr, i) => {
                                                    return (<View key={[arr,i]} style={{flexDirection: 'row'}}>
                                                        {arr.map((visible, j) => {
                                                            return (
                                                                <View key={[i,j,col.i,col.j]} style={{paddingHorizontal: 2}}>
                                                                    {visible == 1? (<Text key={[i,j,col.i,col.j]} style={{fontSize: 9}}>{j+1+i*3}</Text>) : null}
                                                                </View>
                                                            );
                                                        })}
                                                    </View>)})
                                                }
                                            </View>)
                                        }
                                    </Pressable>
                                ))}
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.buttons}>
                    <IconButton 
                        text='erase' 
                        image={require('./icons/eraser.png')} 
                        onPress={()=>{
                            if (selectedCell === undefined || selectedCell.ok) return;
                            var m = JSON.parse(JSON.stringify(matrix));
                            m[selectedCell.i][selectedCell.j].visible = false;
                            setMatrix(m);
                        }}
                        isSelected={false}/>
                    <IconButton 
                        text='annotate'
                        image={require('./icons/annotate.png')}
                        onPress={()=>{
                            if (mode == 'annotate')
                                setMode('write');
                            else
                                setMode('annotate');
                        }}
                        isSelected={mode == 'annotate'}/>
                    <IconButton
                        text='hint' 
                        image={require('./icons/hint.png')}
                        onPress={()=>{
                            if (selectedCell === undefined || selectedCell.ok) return;
                            var m = JSON.parse(JSON.stringify(matrix));
                            m[selectedCell.i][selectedCell.j].value = solution[selectedCell.i][selectedCell.j];
                            m[selectedCell.i][selectedCell.j].ok = true;
                            m[selectedCell.i][selectedCell.j].visible = true;
                            setMatrix(m);
                        }}
                        isSelected={false}/>
                    <IconButton
                        text='finish' 
                        image={require('./icons/finish.png')}
                        onPress={checkAndFinish}
                        isSelected={false}/>

                </View>
                <View style={styles.numbers}>
                    {[1,2,3,4,5,6,7,8,9].map(num => (
                        <NumberButton number={num} key={num} onPress={() => {onNumberPressed(num)}}/>
                    ))}
                </View>
            </SafeAreaView>
        </ContextProvider>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    pauseButton:{
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: '#ffe8aa'
    },
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
    boardContainer:{
        paddingTop: 40
    },
    board:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    boardRow:{
        flexDirection: 'row',
    },
    boardCell:{
        borderWidth: 0.5,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F0F0'
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