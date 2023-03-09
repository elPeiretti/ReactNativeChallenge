import React from 'react';
import DifficultyScreen from './components/screens/DifficultyScreen';
import MainScreen from './components/screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrialGameScreen from './components/screens/TrialGameScreen';
import NormalGameScreen from './components/screens/NormalGameScreen';
import LeaderboardScreen from './components/screens/LeaderboardScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='MainScreen'
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainScreen" component={MainScreen}/>
          <Stack.Screen name="DifficultyScreen" component={DifficultyScreen}/>
          <Stack.Screen name="NormalGameScreen" component={NormalGameScreen}/>
          <Stack.Screen name="TrialGameScreen" component={TrialGameScreen}/>
          <Stack.Screen name = "LeaderboardScreen" component={LeaderboardScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
