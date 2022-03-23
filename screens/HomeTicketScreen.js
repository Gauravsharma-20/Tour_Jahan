import * as React from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import {
	Text,
	View,
	StatusBar,
	StyleSheet,
	ImageBackground,
	ScrollView,
} from 'react-native';
import {
	ListItem,
	Icon,
	BottomSheet,
	Button,
	Avatar,
	Card,
} from 'react-native-elements';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { Picker } from '@react-native-picker/picker';
import HeaderComponent from '../components/frequent/HeaderComponent';

class BookingDetail extends React.Component {
	constructor(props) {
		super(props);
		// var tempData = {};
		// getDoc(doc(db, 'entryfees', props.route.params.siteDetail.id)).then(
		// 	(docSnap) => (tempData = docSnap.data())
		// );
		// const querySnapshot =  getDocs(collection(db, 'entryfees'));
		// querySnapshot.forEach((doc) => {
		//     tempData = doc.data();
		// });
		this.state = {
			data: {
				AgeCategory: {
					Adult: 10,
					Child: 0,
					Senior: -20,
				},
				BaseFees: 50,
				Day: {
					Mon: 0,
					Tue: 0,
					Wed: 0,
					Thu: 0,
					Fri: 10,
					Sat: 20,
					Sun: 20,
				},
				Gender: {
					Female: -5,
					Male: 10,
					Others: -20,
				},
				Nationality: {
					Foreigner: 40,
					Local: -10,
				},
			},
			AgeCategory: 'Adult',
			BaseFees: 50,
			Day: 'Mon',
			Gender: 'Male',
			Nationality: 'Local',
		};
	}

	// componentDidMount() {
	// 	try {
	// 		// const querySnapshot =  getDocs(collection(db, 'entryfees'));
	// 		// querySnapshot.forEach((doc) => {
	// 		// 	console.log(doc.id, ' => ', doc.data());
	// 		// 	this.setState({ data: doc.data() });
	// 		// });
	// 		getDoc(doc(db, 'entryfees', props.route.params.siteDetail.id)).then(
	// 			(docSnap) => this.setState({ data: docSnap.data() })
	// 		);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	renderDetailCard(item) {
		console.log(this.state);
		// const firebaseData = {};
		// console.log(item.id);
		// getDoc(doc(db, 'entryfees', item.id)).then(
		// 	(docSnap) => console.log(docSnap.data())
		// ).then(() => console.log(firebaseData));

		return (
			<Card
				key={item.id}
				containerStyle={{
					backgroundColor: '#ffffff',
					height: '96%',
					borderRadius: 10,
					borderColor: 'black',
					borderWidth: 2,
					marginHorizontal: '3%',
					borderStyle: 'dashed',
					marginTop: '3%',
					marginBottom: '3%',
				}}
				style={{ justifyContent: 'center', backgroundColor: '#fff' }}
			>
				<Text style={{ textAlign: 'left' }}>
					<Icon
						name='times-circle'
						type='font-awesome-5'
						onPress={() => {
							const { goBack } = this.props.navigation;
							goBack();
						}}
						size={20}
					/>
				</Text>
				<Card.Title style={{ fontSize: 20 }}>{item.Name}</Card.Title>
				<Avatar
					containerStyle={{
						justifyContent: 'center',
						alignSelf: 'center',
						marginBottom: 20,
					}}
					size={250}
					source={{ uri: item.ImageUrl[0] }}
				/>
				<Text
					style={{
						fontWeight: 'bold',
						color: 'black',
						marginLeft: '10%',
						marginTop: '2%',
					}}
				>
					AgeCategory
				</Text>
				<Picker
					selectedValue={this.state.AgeCategory}
					onValueChange={(itemValue, itemIndex) =>
						this.setState({ AgeCategory: itemValue })
					}
				>
					{Object.entries(this.state.data.AgeCategory).map(
						([key, value]) => (
							<Picker.Item label={key} value={value} />
						)
					)}
				</Picker>
				<Text
					style={{
						fontWeight: 'bold',
						color: 'black',
						marginLeft: '10%',
						marginTop: '2%',
					}}
				>
					Day
				</Text>
				<Picker
					selectedValue={this.state.Day}
					onValueChange={(itemValue, itemIndex) =>
						this.setState({ Day: itemValue })
					}
				>
					{Object.entries(this.state.data.Day).map(([key, value]) => (
						<Picker.Item label={key} value={value} />
					))}
				</Picker>
				<Text
					style={{
						fontWeight: 'bold',
						color: 'black',
						marginLeft: '10%',
						marginTop: '2%',
					}}
				>
					Gender
				</Text>
				<Picker
					selectedValue={this.state.Gender}
					onValueChange={(itemValue, itemIndex) =>
						this.setState({ Gender: itemValue })
					}
				>
					{Object.entries(this.state.data.Gender).map(
						([key, value]) => (
							<Picker.Item label={key} value={value} />
						)
					)}
				</Picker>
				<Text
					style={{
						fontWeight: 'bold',
						color: 'black',
						marginLeft: '10%',
						marginTop: '2%',
					}}
				>
					Nationality
				</Text>
				<Picker
					selectedValue={this.state.Nationality}
					onValueChange={(itemValue, itemIndex) =>
						this.setState({ Nationality: itemValue })
					}
				>
					{Object.entries(this.state.data.Nationality).map(
						([key, value]) => (
							<Picker.Item label={key} value={value} />
						)
					)}
				</Picker>
				<View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
					<Text
						style={{
							fontWeight: 'bold',
							color: 'black',
							marginLeft: '10%',
							marginTop: '2%',
							fontSize: 25,
						}}
					>
						Total:{' '}
						{Object.entries(this.state)
							.filter(([key, value]) => key !== 'data')
							.map(([key, value]) => value)
							.reduce((prev, next) => prev + next)}
					</Text>
					<Button
						title='GO'
						icon={{
							name: 'arrow-right',
							type: 'font-awesome',
							size: 15,
							color: 'white',
						}}
						iconRight
						iconContainerStyle={{ marginLeft: 10 }}
						titleStyle={{ fontWeight: '700' }}
						buttonStyle={{
							backgroundColor: 'rgba(199, 43, 98, 1)',
							borderColor: 'transparent',
							borderWidth: 0,
							borderRadius: 30,
						}}
						containerStyle={{
							width: 100,
							marginHorizontal: 50,
							// marginVertical: 20,
						}}
					/>
				</View>
			</Card>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<HeaderComponent icon='info' heading='BOOKING DETAILS' />
				<StatusBar
					barStyle='light-content'
					hidden={false}
					backgroundColor='#1572A1'
					translucent={true}
				/>
				<ImageBackground
					source={require('../components/images/Tourist.jpeg')}
					style={styles.image}
				>
					<ScrollView style={styles.scrollView}>
						<View
							style={{ height: '100%', backgroundColor: '#fff' }}
						>
							{this.renderDetailCard(
								this.props.route.params.siteDetail
							)}
						</View>
					</ScrollView>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
	fact: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
		marginHorizontal: 30,
		textAlign: 'center',
	},
	wish: {
		flex: 1,
		color: 'white',
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
		textAlignVertical: 'center',
		flex: 0.2,
	},
	name: {
		flex: 1,
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		textAlignVertical: 'center',
		flex: 0.2,
	},
	section: {
		flex: 1,
		textAlign: 'center',
	},
	scrollView: {
		flex: 1,
		backgroundColor: '#00000099',
	},
});

export default BookingDetail;
