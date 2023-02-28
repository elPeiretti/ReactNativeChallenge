import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";

const DifficultyScreen = () => {

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Choose Difficulty</Text>
            <View style={styles.buttonContainer}>
                <Button text='4x4'/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text='Easy'/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text='Medium'/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text='Hard'/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text='Impossible'/>
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