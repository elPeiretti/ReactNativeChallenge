import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import DifficultyScreen from './components/ui/DifficultyScreen';
import GameScreen from './components/ui/GameScreen';
import MainScreen from './components/ui/MainScreen';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GameScreen/>
    </SafeAreaView>
  );
}

export default App;
