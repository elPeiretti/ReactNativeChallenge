import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const NumberButton = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.number}>{props.number}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default NumberButton;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        alignItems:'center',
    },
    number:{
        fontFamily: 'monospace',
        fontSize: 26,
        color: '#000000'
    }
});