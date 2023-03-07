import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../ui/Button";

const DifficultyScreen = ({route, navigation}) => {

    const gameMode = route.params;

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Choose Difficulty</Text>
            {/*
            Might implement it later 
            <View style={styles.buttonContainer}>
                <Button text='4x4' onPress={()=>navigation.navigate('GameScreen', 10)}/>
            </View>
            */}
            <View style={styles.buttonContainer}>
                <Button text='Easy' onPress={()=>navigation.navigate(gameMode, 2)}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text='Medium' onPress={()=>navigation.navigate(gameMode, 1)}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text='Hard' onPress={()=>navigation.navigate(gameMode, 0)}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text='Impossible' onPress={()=>navigation.navigate(gameMode, -1)}/>
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