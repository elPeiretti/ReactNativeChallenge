import React from 'react';
import DifficultyScreen from './components/ui/DifficultyScreen';
import GameScreen from './components/ui/GameScreen';
import MainScreen from './components/ui/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ContextProvider } from './context/TimeContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='MainScreen'
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainScreen" component={MainScreen}/>
          <Stack.Screen name="DifficultyScreen" component={DifficultyScreen}/>
          <Stack.Screen name="GameScreen" component={GameScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
