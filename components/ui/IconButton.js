import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const IconButton = (props) => {
    return (
        <View style={[styles.container, props.isSelected && {backgroundColor: 'rgba(0,0,255,0.2)'}]}>
            <TouchableOpacity onPress={props.onPress}>
                <Image source={props.image} style={styles.image}/>
                <Text style={styles.title}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 100
    },
    image:{
        width: 30,
        height: 30,
        alignSelf: 'center'
    },
    title:{
        fontFamily:'monospace',
        fontSize: 12,
        color: '#000000',
    }
});