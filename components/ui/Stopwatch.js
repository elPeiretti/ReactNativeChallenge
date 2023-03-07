import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native'
import { TimeContext } from '../../context/TimeContext';

const Stopwatch = (props) => {

    const ctx = useContext(TimeContext);

    useEffect(() => {
        ctx.setter(props.startTime);
    }, [])

    useEffect(() => {
        const int = setInterval(() => {
            if (!props.isCounting) return;
            if (props.mode == 'increment')
                ctx.increment();
            else{
                if (ctx.time == 0){
                    props.onTimeReached();
                    return;
                }
                ctx.decrement();
            }
        },1000);
        return () => {clearInterval(int)};
    }, [ctx.time, props.isCounting]);

    return (
        <Text style={styles.stopwatch}>
            {new Date(ctx.time*1000).toISOString().substring(11,19)}
        </Text>
    );
}

export default Stopwatch;

export function secondsTohhmmss(seconds) {
    return new Date(seconds*1000).toISOString().substring(11,19);
}

const styles = StyleSheet.create({
    stopwatch:{
        alignSelf: 'center',
        paddingEnd: 15,
        fontSize: 20
    },
});