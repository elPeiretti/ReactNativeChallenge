import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { getLeaderboard } from "../../persistence/repository/LeaderboardRepository";

const LeaderboardScreen = () => {

    const [easyLb, setEasyLb] = useState([]);
    const [mediumLb, setMediumLb] = useState([]);
    const [hardLb, setHardLb] = useState([]);

    useEffect(() => {
        const loadLb = async (diff) => {
            return await getLeaderboard(diff);
        }
        const objToArray = (obj) => {
            //ok this works
            var i=1;
            return Object.keys(obj).map((key) => [i++, key, Object.keys(obj[key]).map(s => obj[key][s])[0]]);
        }
        loadLb("easy").then(objToArray).then(setEasyLb);    
        loadLb("medium").then(objToArray).then(setMediumLb);            
        loadLb("hard").then(objToArray).then(setHardLb);            

    }, []);

    function toLeaderboardRow(player){
        return (
            <Text key={[player[0],player[1]]} style={styles.position}>
                {player[0]+" - "+player[1]+" - "+player[2]}
            </Text>);
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <View>
                        <Text style={styles.title}>Easy</Text>
                        {easyLb.map(toLeaderboardRow)}
                    </View>
                    <View style={{paddingTop: 20}}>
                        <Text style={styles.title}>Medium</Text>
                        {mediumLb.map(toLeaderboardRow)}
                    </View>
                    <View style={{paddingTop: 20}}>
                        <Text style={styles.title}>Hard</Text>
                        {hardLb.map(toLeaderboardRow)}
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
        fontWeight: 'bold',
        alignSelf: 'center',
        backgroundColor: '#d6f9ff',
    },
    position:{
        fontSize: 16
    }
});