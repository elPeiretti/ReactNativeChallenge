import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SudokuBoard = () => {

    const [solution, setSolution] = useState();

    const cell = {
        value: 1,
        notes: [],
        visible: false,
        prefilled: false
    }
    const [matrix, setMatrix] = useState([
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
        [cell, cell, cell, cell, cell, cell, cell, cell, cell],
    ]);

    return (
        <View style={styles.board}>
            {matrix.map(row => (
                <View style={styles.boardRow}>
                    {row.map(col => (
                        <View style={styles.boardCell}>
                            <Text>{col.value}</Text>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
}

export default SudokuBoard;

const styles = StyleSheet.create({
    board:{
        flexDirection: 'column',
        borderWidth: 1
    },
    boardRow:{
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'space-evenly'
    },
    boardCell:{
        borderWidth: 3,
    }
});