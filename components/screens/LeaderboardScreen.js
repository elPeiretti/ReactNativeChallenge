import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { getEasyLeaderboard } from "../../persistence/repository/LeaderboardRepository";

const LeaderboardScreen = () => {

    const [easyLb, setEasyLb] = useState([]);
    const [mediumLb, setMediumLb] = useState([]);
    const [hardLb, setHardLb] = useState([]);

    useEffect(() => {
        const loadEasy = async () => {
            return await getEasyLeaderboard();
        }
        loadEasy().then(r => {
            //ok this works
            return Object.keys(r).map((key) => [key, Object.keys(r[key]).map(s => r[key][s])[0]])})
            .then(setEasyLb);
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <View>
                        <Text style={styles.title}>Easy</Text>
                        {console.log(easyLb)}
                    </View>
                    <View>
                        <Text style={styles.title}>Medium</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Hard</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default LeaderboardScreen;

const styles = StyleSheet.create({
    title:{
        fontSize: 42,
        fontFamily: 'monospace',
        fontWeight: 'bold'
    }
});