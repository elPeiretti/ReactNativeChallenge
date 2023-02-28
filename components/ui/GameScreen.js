import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import IconButton from './IconButton';
import NumberButton from './NumberButton';
import SudokuBoard from './SudokuBoard';

const GameScreen = () => {

    const [timeInSeconds, setTimeInSecods] = useState(0);

    return (
        <View style={{flex: 1, backgroundColor: '#FF00FF'}}>
            <View style={[{flexDirection: 'row', alignSelf: 'flex-end', paddingEnd: 15, paddingTop: 30}, styles.viewBorder]}>
                <Text style={styles.stopwatch}>
                    {new Date(timeInSeconds*1000).toISOString().substring(11,19)}
                </Text>
                <TouchableOpacity style={styles.pauseButton}>
                    <Text style={{fontWeight: 'bold', color: '#000000'}}>| |</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.viewBorder, styles.board]}>
                <SudokuBoard/>
            </View>
            <View style={[styles.viewBorder, styles.buttons]}>
                <IconButton text='erase' image={require('./icons/eraser.png')}/>
                <IconButton text='annotate' image={require('./icons/annotate.png')}/>
                <IconButton text='hint' image={require('./icons/hint.png')}/>
            </View>
            <View style={[styles.viewBorder, styles.numbers]}>
                {[1,2,3,4,5,6,7,8,9].map(n => (
                    <NumberButton number={n}/>
                ))}
            </View>

        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    viewBorder:{
        borderWidth: 1,
        borderRadius: 0,
        backgroundColor: '#00FF00'
    },
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
        paddingTop: 10
    }
});