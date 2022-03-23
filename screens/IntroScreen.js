import * as React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TextInput,
	Button,
	TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FlatButton from '../shared/button';
import colors from '../theme';
// import {
// 	FirebaseRecaptchaVerifierModal,
// 	FirebaseRecaptchaBanner,
// } from 'expo-firebase-recaptcha';
// import { app } from '../firebase/firebase';
import useAuth from '../hooks/useAuth';

const IntroScreen = () => {
	// const {
	// 	loading,
	// 	sendVerificationCode,
	// 	handleVerification,
	// 	phoneNumber,
	// 	setPhoneNumber,
	// 	verificationId,
	// 	setVerificationCode,
	//     message,
	//     showMessage,
	//     recaptchaVerifier
	// } = useAuth();
	// const recaptchaVerifier = React.useRef(null);
	// const [phoneNumber, setPhoneNumber] = React.useState();
	// const [verificationId, setVerificationId] = React.useState();
	// const [verificationCode, setVerificationCode] = React.useState();

	// const firebaseConfig = app ? app.options : undefined;
	// const [message, showMessage] = React.useState();
	// const attemptInvisibleVerification = false;
	const { signInWithGoogle, loading } = useAuth();

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
							{loading ? 'Loading . . . ' : 'Login to the app'}
						</Text>
						<FlatButton
							text='Sign In With Google'
							onPress={signInWithGoogle}
						/>
						{/* <FirebaseRecaptchaVerifierModal
							ref={recaptchaVerifier}
							firebaseConfig={app.options}
						/> */}
						{/* <Text style={styles.logButtonText}>
							{loading ? 'Loading . . . ' : 'Enter phone number'}
						</Text>
						<TextInput
							style={{
								marginVertical: 10,
								fontSize: 17,
								backgroundColor: '#fff',
							}}
							placeholder='+91 999 999 9999'
							autoFocus
							autoCompleteType='tel'
							keyboardType='phone-pad'
							textContentType='telephoneNumber'
							onChangeText={(phoneNumber) =>
								setPhoneNumber(phoneNumber)
							}
						/>
						<Button
							title='Send Verification Code'
							// disabled={!phoneNumber}
							onPress={sendVerificationCode}
						/>
						<Text style={{ marginTop: 20 }}>
							Enter Verification code
						</Text>
						<TextInput
							style={{
								marginVertical: 10,
								fontSize: 17,
								backgroundColor: '#fff',
							}}
							editable={!!verificationId}
							placeholder='123456'
							onChangeText={setVerificationCode}
						/>
						<Button
							title='Confirm Verification Code'
							disabled={!verificationId}
							onPress={handleVerification}
						/>
						{message ? (
							<TouchableOpacity
								style={[
									StyleSheet.absoluteFill,
									{
										backgroundColor: 0xffffffee,
										justifyContent: 'center',
									},
								]}
								onPress={() => showMessage(undefined)}
							>
								<Text
									style={{
										color: message.color || 'blue',
										fontSize: 17,
										textAlign: 'center',
										margin: 20,
									}}
								>
									{message.text}
								</Text>
							</TouchableOpacity>
						) : undefined}
						{attemptInvisibleVerification && (
							<FirebaseRecaptchaBanner />
						)} */}
					</View>
				)}
			</View>
		);
	};

	return (
		<AppIntroSlider
			activeDotStyle={{
				backgroundColor: colors.intro.activeDotStyle,
				width: '5%',
			}}
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
		text: 'Welcome to TourJahan, a ticket booking app by the Ministry of Culture.',
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
