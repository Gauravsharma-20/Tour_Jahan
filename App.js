import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './routes/MainNavigator';

console.disableYellowBox = true;
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    );
  }
} 


