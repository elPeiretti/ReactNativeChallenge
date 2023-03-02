import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native'

const Stopwatch = (props) => {

    const [timeInSeconds, setTimeInSecods] = useState(0);

    useEffect(() => {
        const int = setInterval(() => {if (props.isCounting) setTimeInSecods(timeInSeconds+1)},1000);
        return () => {clearInterval(int)};
    }, [timeInSeconds, props.isCounting]);

    return (
        <Text style={styles.stopwatch}>
            {new Date(timeInSeconds*1000).toISOString().substring(11,19)}
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