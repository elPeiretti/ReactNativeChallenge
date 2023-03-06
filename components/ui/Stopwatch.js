import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native'
import { TimeContext } from '../../context/TimeContext';

const Stopwatch = (props) => {

    const ctx = useContext(TimeContext);

    useEffect(() => {
        ctx.setter(100);
    }, [])

    useEffect(() => {
        const int = setInterval(() => {if (props.isCounting) ctx.increment()},1000);
        return () => {clearInterval(int)};
    }, [ctx.time, props.isCounting]);

    return (
        <Text style={styles.stopwatch}>
            {new Date(ctx.time*1000).toISOString().substring(11,19)}
        </Text>
    );
}

export default Stopwatch;

const styles = StyleSheet.create({
    stopwatch:{
        alignSelf: 'center',
        paddingEnd: 15,
        fontSize: 20
    },
});