import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const IconButton = (props) => {
    return (
        <View style={[styles.container, props.isSelected && {backgroundColor: 'rgba(0,0,255,0.2)'}]}>
            <Pressable onPress={props.onPress}>
                <Image source={props.image} style={styles.image}/>
            </Pressable>
            <Text style={styles.title}>{props.text}</Text>
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
        height: 30
    },
    title:{
        fontFamily:'monospace',
        fontSize: 12,
        color: '#000000'
    }
});