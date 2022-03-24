import * as React from 'react';
import { Text, View } from 'react-native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { Icon } from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import MyTicketsScreen from '../screens/TicketScreen';
import AddReviewScreen from '../screens/ReviewScreen';
import FindGuideScreen from '../screens/GuideScreen';
import FindLocationScreen from '../screens/LocationScreen';
import useAuth, { AuthProvider } from '../hooks/useAuth';
import IntroScreen from '../screens/IntroScreen';
import TicketDetail from '../screens/TicketDetailScreen';
import BookingDetail from '../screens/HomeTicketScreen';

const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

const HomeNavigator = createNativeStackNavigator();
const MyTicketsNavigator = createNativeStackNavigator();
const AddReviewNavigator = createNativeStackNavigator();
const FindGuideNavigator = createNativeStackNavigator();
const FindLocationNavigator = createNativeStackNavigator();

function HomeNavigatorScreen() {
	return (
		<HomeNavigator.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#000075',
					headerShown: false,
				},
				headerTintColor: '#000075',
				headerTitleStyle: {
					color: '#000075',
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: 15,
				},
				headerShown: false,
			}}
		>
			<HomeNavigator.Screen
				name='HOME'
				component={HomeScreen}
				options={
					({ headerTitle: 'My Profile' },
					({ navigation }) => ({
						/*headerRight: () => (
							<Image
								source={require('./images/Logo.png')}
								style={{ width: 75, height: 75 }}
							/>

						),*/
						headerLeft: () => (
							<Icon
								name='user-alt'
								type='font-awesome-5'
								size={24}
								color='#000075'
								iconStyle={{ marginRight: 10 }}
								onPress={() => navigation.toggleDrawer()}
							/>
						),
					}))
				}
			/>
			<HomeNavigator.Screen
                name="BOOKING DETAILS"
                component={BookingDetail}
                options= {{ headerTitle: "BOOKING DETAILS", headerTitleStyle: {textAlign: 'left', fontWeight: 'bold'}}}
            />
		</HomeNavigator.Navigator>
	);
}

function MyTicketsNavigatorScreen() {
  return(
      <MyTicketsNavigator.Navigator
          screenOptions={{
              headerStyle: {
                  backgroundColor: "#03045E",
                  headerShown: false
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                  color: "#fff"  ,
                  textAlign: 'center',
                  fontWeight: "bold",
                  fontSize: 15                    
              },
              headerShown: false
          }}
      >
          <MyTicketsNavigator.Screen
              name="HOME"
              component={MyTicketsScreen}
              options={{headerTitle: "My Profile"},({navigation}) => ({
                  /*headerRight: () => (
                      <Image source={require('./images/Logo.png')} style={{width: 75, height: 75}}/>
                  ),*/
                  headerLeft: () => (
                      <Icon 
                          name='user-alt'
                          type="font-awesome-5" 
                          size={24}
                          color='white'
                          iconStyle={{marginRight: 10}}
                          onPress={() => 
                              navigation.toggleDrawer()}
                      />
                  )
              })}
          />
          <MyTicketsNavigator.Screen
                name="TICKET DETAILS"
                component={TicketDetail}
                options= {{ headerTitle: "TICKET DETAILS", headerTitleStyle: {textAlign: 'left', fontWeight: 'bold'}}}
            />

      </MyTicketsNavigator.Navigator>
  );
}

function AddReviewNavigatorScreen() {
	return (
		<AddReviewNavigator.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#03045E',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					color: '#fff',
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: 15,
				},
				headerShown: false,
			}}
		>
			<AddReviewNavigator.Screen
				name='HOME'
				component={AddReviewScreen}
				options={
					({ headerTitle: 'My Profile' },
					({ navigation }) => ({
						/*headerRight: () => (
							<Image
								source={require('./images/Logo.png')}
								style={{ width: 75, height: 75 }}
							/>
						),*/
						headerLeft: () => (
							<Icon
								name='user-alt'
								type='font-awesome-5'
								size={24}
								color='white'
								iconStyle={{ marginRight: 10 }}
								onPress={() => navigation.toggleDrawer()}
							/>
						),
					}))
				}
			/>
		</AddReviewNavigator.Navigator>
	);
}

function FindGuideNavigatorScreen() {
	return (
		<FindGuideNavigator.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#03045E',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					color: '#fff',
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: 15,
				},
				headerShown: false,
			}}
		>
			<FindGuideNavigator.Screen
				name='HOME'
				component={FindGuideScreen}
				options={
					({ headerTitle: 'My Profile' },
					({ navigation }) => ({
						/*headerRight: () => (
							<Image
								source={require('./images/Logo.png')}
								style={{ width: 75, height: 75 }}
							/>
						),*/
						headerLeft: () => (
							<Icon
								name='user-alt'
								type='font-awesome-5'
								size={24}
								color='white'
								iconStyle={{ marginRight: 10 }}
								onPress={() => navigation.toggleDrawer()}
							/>
						),
					}))
				}
			/>
		</FindGuideNavigator.Navigator>
	);
}

function FindLocationNavigatorScreen() {
	return (
		<FindLocationNavigator.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#03045E',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					color: '#fff',
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: 15,
				},
				headerShown: false,
			}}
		>
			<FindLocationNavigator.Screen
				name='HOME'
				component={FindLocationScreen}
				options={
					({ headerTitle: 'My Profile' },
					({ navigation }) => ({
						/*headerRight: () => (
							<Image
								source={require('./images/Logo.png')}
								style={{ width: 75, height: 75 }}
							/>
						),*/
						headerLeft: () => (
							<Icon
								name='user-alt'
								type='font-awesome-5'
								size={24}
								color='white'
								iconStyle={{ marginRight: 10 }}
								onPress={() => navigation.toggleDrawer()}
							/>
						),
					}))
				}
			/>
		</FindLocationNavigator.Navigator>
	);
}

export default function MainNavigator() {
	const { user } = useAuth();
	console.log(user);

	return user ? (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={{ headerShown: false }}
			tabBarOptions={{
				initialRouteName: 'Home',
				activeBackgroundColor: '#fd7e14',
				inactiveBackgroundColor: '#000075',
				activeTintColor: '#fff',
				inactiveTintColor: '#fff',
			}}
		>
			<Tab.Screen
				name='Home'
				component={HomeNavigatorScreen}
				options={{
					title: 'Home',
					tabBarIcon: ({ color: tintColor, focused }) => (
						<Icon
							name='home'
							type='font-awesome-5'
							size={focused ? 30 : 24}
							iconStyle={{ color: tintColor }}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Tickets'
				component={MyTicketsNavigatorScreen}
				options={{
					title: 'Tickets',
					tabBarIcon: ({ color: tintColor, focused }) => (
						<Icon
							name='ticket-alt'
							type='font-awesome-5'
							size={focused ? 30 : 24}
							iconStyle={{ color: tintColor }}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Review'
				component={AddReviewNavigatorScreen}
				options={{
					title: 'Review',
					tabBarIcon: ({ color: tintColor, focused }) => (
						<Icon
							name='edit'
							type='font-awesome-5'
							size={focused ? 30 : 24}
							iconStyle={{ color: tintColor }}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Guides'
				component={FindGuideNavigatorScreen}
				options={{
					title: 'Guides',
					tabBarIcon: ({ color: tintColor, focused }) => (
						<Icon
							name='user-tie'
							type='font-awesome-5'
							size={focused ? 30 : 24}
							iconStyle={{ color: tintColor }}
						/>
					),
				}}
			/>
			<Tab.Screen
				name='Locations'
				component={FindLocationNavigatorScreen}
				options={{
					title: 'Locations',
					tabBarIcon: ({ color: tintColor, focused }) => (
						<Icon
							name='globe'
							type='font-awesome-5'
							size={focused ? 30 : 24}
							iconStyle={{ color: tintColor }}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	) : (
		<IntroScreen />
	);
}
