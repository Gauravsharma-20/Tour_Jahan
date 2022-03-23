import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import colors from '../theme';

const IntroScreen = () => {
	const RenderItem = ({ item }) => {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: item.backgroundColor,
					alignItems: 'center',
					justifyContent: 'center',
					paddingBottom: 100,
					// marginTop: Constants.statusBarHeight,
				}}
			>
				<Text style={styles.title}>{item.title}</Text>
				<Image style={styles.image} source={item.image} />
				<Text style={styles.text}>{item.text}</Text>
				{item.key == 5 && (
					<View style={styles.logButton}>
						<Text style={styles.logButtonText}>
							{/* {loading ? 'Loading . . . ' : 'Login to the app'} */}
						</Text>
						<FlatButton
							text='Sign In With Google'
							// onPress={signInWithGoogle}
							// onPress={() => {
							// 	promptAsync({
							// 		useProxy: false,
							// 		showInRecents: true,
							// 	});
							// }}
						/>
					</View>
				)}
			</View>
		);
	};

	return (
		<AppIntroSlider
			activeDotStyle={{ backgroundColor: colors.intro.activeDotStyle, width: '5%' }}
			dotStyle={{
				backgroundColor: '#eeeeee',
				width: '2%',
				height: 5,
			}}
			data={slides}
			renderItem={RenderItem}
			showSkipButton={true}
			showDoneButton={false}
		/>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 48,
		color: colors.intro.heading,
		textAlign: 'center',
		fontWeight: 'bold',
		paddingTop: 100,
		marginBottom: 10,
	},
	text: {
		fontSize: 18,
		color: colors.intro.text,
		textAlign: 'center',
		padding: 30,
		lineHeight: 24,
	},
	image: {
		width: 200,
		height: 200,
	},
	logButton: {
		position: 'relative',
		bottom: 80,
		alignItems: 'center',
	},
	logButtonText: {
		fontSize: 24,
		fontWeight: 'bold',
		margin: 20,
		color: '#32407b',
	},
});

const slides = [
	{
		key: 1,
		title: 'WELCOME !',
		text: 'Welcome to the #1 ads-free Stock Watchlist App, an Open Source Project by the students of ACM-CSS PEC',
		image: require('../components/images/Logo.png'),
		backgroundColor: colors.intro.backgroundColor,
	},
	{
		key: 2,
		title: 'ADS FREE',
		text: 'A Stock Watchlist App, where you can keep a check on the change, with out getting interupted by ads',
		image: require('../components/images/Logo.png'),
		backgroundColor: colors.intro.backgroundColor,
	},
	{
		key: 3,
		title: 'ACCURATE',
		text: 'No need to worry about wrong stats, just open the app, check the rate and invest with no fear of inaccuracy in change display.',
		image: require('../components/images/Logo.png'),
		backgroundColor: colors.intro.backgroundColor,
	},
	{
		key: 4,
		title: 'EASY & USER-FRIENDLY',
		text: "With it's simple user interface, and easy to use funtions, it makes Stock research 10x Easier ",
		image: require('../components/images/Logo.png'),
		backgroundColor: colors.intro.backgroundColor,
	},
	{
		key: 5,
		title: 'GET STARTED',
		text: '',
		image: require('../components/images/Logo.png'),
		backgroundColor: colors.intro.backgroundColor,
	},
];

export default IntroScreen;
