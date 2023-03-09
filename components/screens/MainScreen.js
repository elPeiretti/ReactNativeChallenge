import React, { useState } from 'react';
import { BackHandler, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../ui/Button';
import InfoModal from '../ui/modal/InfoModal';

const MainScreen = ({navigation}) => {

    const [modalInfoIsVisible, setModalInfoIsVisible] = useState(false);

    return (
        <View style={styles.main}>
            <InfoModal isVisible={modalInfoIsVisible} onClosePressed={()=>{setModalInfoIsVisible(false)}}/>
            <View style={styles.helpContainer}>
                <TouchableOpacity style={styles.helpButton} onPress={()=>{setModalInfoIsVisible(true)}}>
                    <Text style={{color:"#000000", fontSize: 22}}>?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Sudoku</Text>
                <Text style={styles.signature}> By elPeiretti</Text>
            </View>
            <View>
                <Button text='Normal' style={{alignSelf: 'center'}} onPress={()=>navigation.navigate('DifficultyScreen', 'NormalGameScreen')}/>
            </View>
            <View style={{paddingTop: 10}}>
                <Button text='Time-trial' style={{alignSelf: 'center'}} onPress={() => navigation.navigate('DifficultyScreen', 'TrialGameScreen')}/>
            </View>
            <View style={{paddingTop: 200}}>
                {/* Backhandler only works in Android */}
                <Button text='Exit' color='#ffd6d6' style={{alignSelf: 'center'}} onPress={() => {BackHandler.exitApp()}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        flexDirection: 'column',
        position: 'relative'
    },
    helpContainer:{
        width:'100%', 
        paddingEnd: 10, 
        paddingTop: 10
    },
    helpButton:{
        width: 40,
        height: 40,        
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: '#ffe8aa',
        alignSelf: 'flex-end'
    },
    titleContainer:{
        paddingVertical: 50,
        alignItems: 'center',
    },
    title:{
        fontSize: 72,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: '#000000',
    },
    signature:{
        alignSelf: 'flex-end',
        paddingEnd: 70
    }
});

export default MainScreen;