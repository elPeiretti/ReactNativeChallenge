import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity 
            style={[styles.button, props.color && {backgroundColor: props.color}, props.style]}
            activeOpacity={0.5}
        >
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 10,
        borderWidth: 3,
        height: 70,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d6f9ff'
    },
    text:{
        fontSize: 36,
        fontFamily: 'sans-serif-medium',
        color: '#5A5A5A'
    }
});

export default Button;