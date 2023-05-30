import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar
} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';


function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Landing Page Goes Here */}
        <HomeScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;