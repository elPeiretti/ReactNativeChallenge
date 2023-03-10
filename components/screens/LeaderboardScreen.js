import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { getLeaderboard } from "../../persistence/repository/LeaderboardRepository";
import Button from "../ui/Button";

const LeaderboardScreen = ({navigation}) => {

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
                {player[0]+" - "}
                <Text style={{color:'#0097ff', fontWeight: 'bold'}}>{[player[1]]}</Text>
                {" - "+player[2]}
            </Text>);
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{justifyContent: 'center', flex: 1}}>
                    <View>
                            <Text style={[styles.title, {backgroundColor: '#d6f9ff'}]}>Easy</Text>
                            {easyLb.map(toLeaderboardRow)}
                    </View>
                    <View style={{paddingTop: 20}}>
                        <Text style={[styles.title, {backgroundColor: '#ffe8aa'}]}>Medium</Text>
                        {mediumLb.map(toLeaderboardRow)}
                    </View>
                    <View style={{paddingTop: 20}}>
                        <Text style={[styles.title, {backgroundColor: '#ffd6d6'}]}>Hard</Text>
                        {hardLb.map(toLeaderboardRow)}
                    </View>
                    <View style={{alignItems: 'center', paddingTop: 20, paddingBottom: 10}}>
                        <Button 
                            color='#d6f9ff' 
                            text='Go back' 
                            onPress={()=>{navigation.reset({index:0, routes: [{name: 'MainScreen'}]})}}/>
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
        alignSelf: 'stretch',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    position:{
        fontSize: 18,
        alignSelf: 'center',
        padding: 2
    }
});