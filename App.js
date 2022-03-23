import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { AuthProvider } from './hooks/useAuth';
import MainNavigator from './routes/MainNavigator';

console.disableYellowBox = true;
export default class App extends React.Component {
	render() {
		return (
			<SafeAreaProvider>
				<NavigationContainer>
					<AuthProvider>
						<RootSiblingParent>
							<MainNavigator />
						</RootSiblingParent>
					</AuthProvider>
				</NavigationContainer>
			</SafeAreaProvider>
		);
	}
}
