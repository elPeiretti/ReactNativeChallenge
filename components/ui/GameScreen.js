import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GameScreen = () => {

    const [timeInSeconds, setTimeInSecods] = useState(0);

    return (
        <View style={{flex: 1, backgroundColor: '#FF00FF'}}>
            <View style={[{flexDirection: 'row', alignSelf: 'flex-end', paddingEnd: 10, paddingTop: 10}, styles.viewBorder]}>
                <Text style={styles.stopwatch}>
                    {new Date(timeInSeconds*1000).toISOString().substring(11,19)}
                </Text>
                <TouchableOpacity style={styles.pauseButton}>
                    <Text style={{fontWeight: 'bold', color: '#000000'}}>| |</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewBorder}>

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
    }
});