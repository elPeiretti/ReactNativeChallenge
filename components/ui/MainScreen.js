import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './Button';

const MainScreen = ({navigation}) => {

    return (
        <View style={styles.main}>
            <View style={styles.helpContainer}>
                <TouchableOpacity style={styles.helpButton}>
                    <Text style={{color:"#000000", fontSize: 22}}>?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Sudoku</Text>
                <Text style={styles.signature}> By elPeiretti</Text>
            </View>
            <View>
                <Button text='Normal' style={{alignSelf: 'center'}} onPress={()=>navigation.navigate('DifficultyScreen')}/>
            </View>
            <View style={{paddingTop: 10}}>
                <Button text='WIP: Time-trial' style={{alignSelf: 'center', backgroundColor: '#bdbdbd'}}/>
            </View>
            <View style={{paddingTop: 200}}>
                <Button text='Exit' color='#ffd6d6' style={{alignSelf: 'center'}}/>
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