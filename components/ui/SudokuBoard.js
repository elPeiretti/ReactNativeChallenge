import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

const SudokuBoard = () => {

    const [solution, setSolution] = useState();

    const cell = {
        i: -1,
        j: -1,
        value: 2,
        notes: [[]],
        visible: false,
        prefilled: false
    }

    //best thing that came to my mind without googling hehe
    const [matrix, setMatrix] = useState([
        [{...cell, i:0, j:0}, {...cell, i:0, j:1}, {...cell, i:0, j:2}, {...cell, i:0, j:3}, {...cell, i:0, j:4}, {...cell, i:0, j:5}, {...cell, i:0, j:6}, {...cell, i:0, j:7}, {...cell, i:0, j:8}],
        [{...cell, i:1, j:0}, {...cell, i:1, j:1}, {...cell, i:1, j:2}, {...cell, i:1, j:3}, {...cell, i:1, j:4}, {...cell, i:1, j:5}, {...cell, i:1, j:6}, {...cell, i:1, j:7}, {...cell, i:1, j:8}],
        [{...cell, i:2, j:0}, {...cell, i:2, j:1}, {...cell, i:2, j:2}, {...cell, i:2, j:3}, {...cell, i:2, j:4}, {...cell, i:2, j:5}, {...cell, i:2, j:6}, {...cell, i:2, j:7}, {...cell, i:2, j:8}],
        [{...cell, i:3, j:0}, {...cell, i:3, j:1}, {...cell, i:3, j:2}, {...cell, i:3, j:3}, {...cell, i:3, j:4}, {...cell, i:3, j:5}, {...cell, i:3, j:6}, {...cell, i:3, j:7}, {...cell, i:3, j:8}],
        [{...cell, i:4, j:0}, {...cell, i:4, j:1}, {...cell, i:4, j:2}, {...cell, i:4, j:3}, {...cell, i:4, j:4}, {...cell, i:4, j:5}, {...cell, i:4, j:6}, {...cell, i:4, j:7}, {...cell, i:4, j:8}],
        [{...cell, i:5, j:0}, {...cell, i:5, j:1}, {...cell, i:5, j:2}, {...cell, i:5, j:3}, {...cell, i:5, j:4}, {...cell, i:5, j:5}, {...cell, i:5, j:6}, {...cell, i:5, j:7}, {...cell, i:5, j:8}],
        [{...cell, i:6, j:0}, {...cell, i:6, j:1}, {...cell, i:6, j:2}, {...cell, i:6, j:3}, {...cell, i:6, j:4}, {...cell, i:6, j:5}, {...cell, i:6, j:6}, {...cell, i:6, j:7}, {...cell, i:6, j:8}],
        [{...cell, i:7, j:0}, {...cell, i:7, j:1}, {...cell, i:7, j:2}, {...cell, i:7, j:3}, {...cell, i:7, j:4}, {...cell, i:7, j:5}, {...cell, i:7, j:6}, {...cell, i:7, j:7}, {...cell, i:7, j:8}],
        [{...cell, i:8, j:0}, {...cell, i:8, j:1}, {...cell, i:8, j:2}, {...cell, i:8, j:3}, {...cell, i:8, j:4}, {...cell, i:8, j:5}, {...cell, i:8, j:6}, {...cell, i:8, j:7}, {...cell, i:8, j:8}],
    ]);

    const [selectedCell, setSelectedCell] = useState({});

    return (
        <View style={styles.board}>
            {matrix.map(row => (
                <View style={styles.boardRow} key={row[0].i}>
                    {row.map(col => (
                        <Pressable key={[col.i, col.j]}
                            style={[
                                styles.boardCell,
                                col.j == 0 && {borderLeftWidth: 2},
                                col.i == 0 && {borderTopWidth: 2},
                                (col.i+1)%3 == 0 && {borderBottomWidth: 2},
                                (col.j+1)%3 == 0 && {borderRightWidth: 2},
                                selectedCell === col && {backgroundColor: 'yellow'},
                            ]}
                            onPress={()=>{setSelectedCell(col)}}>
                            <Text style={{fontSize:22}}>{col.value}</Text>
                        </Pressable>
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
        borderWidth: 1,
        alignItems: 'center',
    },
    boardRow:{
        flexDirection: 'row',
        backgroundColor: '#0000FF'
    },
    boardCell:{
        borderWidth: 0.5,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00FFFF'
    }
});