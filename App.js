import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Main from './components/MainComponent';

console.disableYellowBox = true;
export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <Main/>
      </SafeAreaProvider>
    );
  }
} 


