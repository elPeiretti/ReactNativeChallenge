import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const DifficultyScreen = ({navigation}) => {

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Choose Difficulty</Text>
            <View style={styles.buttonContainer}>
                <Button text='4x4'/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text='Easy' onPress={()=>navigation.navigate('GameScreen', 1)}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text='Medium' onPress={()=>navigation.navigate('GameScreen', 2)}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text='Hard' onPress={()=>navigation.navigate('GameScreen',3 )}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text='Impossible' onPress={()=>navigation.navigate('GameScreen', 4)}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flexDirection: 'column',
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    title:{
        fontSize: 42,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        paddingBottom: 15
    },
    buttonContainer:{
        padding: 10
    }
});

export default DifficultyScreen;