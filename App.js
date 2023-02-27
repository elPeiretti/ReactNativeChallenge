import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import MainScreen from './components/ui/MainScreen';

function App() {
  return (
    <SafeAreaView>
      <MainScreen/>
    </SafeAreaView>
  );
}

export default App;
