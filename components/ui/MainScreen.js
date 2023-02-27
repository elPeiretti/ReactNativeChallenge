import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from './Button';

const MainScreen = () => {

    return (
        <View>
            <Button text='Normal'/>
            <Button text='Time-trial'/>
            <Button text='Exit'/>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default MainScreen;