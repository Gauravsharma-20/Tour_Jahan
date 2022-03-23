import * as React from 'react';
import { Button, ListItem, Avatar, Icon, Card } from 'react-native-elements';
import {
	Text,
	View,
	StatusBar,
	ImageBackground,
	StyleSheet,
	Image,
	ScrollView,
} from 'react-native';
import HeaderComponent from '../components/frequent/HeaderComponent';
import { sitesData } from '../data/sitesData';
// import { collection, addDoc } from "firebase/firestore";
// import { db } from '../firebase/firebase';

// const test = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "tests"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

class Home extends React.Component {
	renderTicketData = (sitesData) => {
		return sitesData.map((site) => {
			return (
				<Card
					containerStyle={{
						backgroundColor: '#fff',
						borderRadius: 12,
						borderColor: 'grey',
						borderWidth: 2,
						marginHorizontal: '3%',
						marginTop: '3%',
					}}
					style={{ justifyContent: 'center' }}
					key={site.id}
				>
					<Card.Title>{site.Name}</Card.Title>
					<Card.Image
						style={{ padding: 0, marginBottom: 10 }}
						source={{
							uri: site.ImageUrl[0],
						}}
					/>
					<Text
						style={{
							fontWeight: 'bold',
							color: 'black',
							marginLeft: '0%',
							marginTop: '2%',
						}}
					>
						<Icon
							name='calendar'
							type='font-awesome-5'
							color='black'
							size={18}
							iconStyle={{ marginRight: 10 }}
						/>
						Entry Time{' '}
						{new Intl.DateTimeFormat('en-US', {
							day: 'numeric',
							month: 'long',
							year: 'numeric',
							hour: 'numeric',
							minute: 'numeric',
						}).format(
							new Date(
								Date.parse('2022-03-22T04:58:10.539+00:00')
							)
						)}
					</Text>
					<Text
						style={{
							fontWeight: 'bold',
							color: 'black',
							marginLeft: '0%',
							marginTop: '2%',
						}}
					>
						<Icon
							name='hourglass'
							type='font-awesome-5'
							color='black'
							size={18}
							iconStyle={{ marginRight: 10 }}
						/>
						Exit Time{' '}
						{new Intl.DateTimeFormat('en-US', {
							day: 'numeric',
							month: 'long',
							year: 'numeric',
							hour: 'numeric',
							minute: 'numeric',
						}).format(
							new Date(
								Date.parse('2022-03-22T04:58:10.539+00:00')
							)
						)}
					</Text>
					<Button
						title='BOOK TICKET'
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
							width: 200,
							marginHorizontal: 50,
							marginVertical: 20,
						}}
						onPress={() =>
							this.props.navigation.navigate('BOOKING DETAILS', {
								siteDetail: site,
							})
						}
					/>
				</Card>
			);
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<HeaderComponent icon='home' heading='HOME' />
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
					<View
						style={{ height: '100%', backgroundColor: '#00000099' }}
					>
						<ScrollView style={styles.scrollView}>
							<View style={{ marginBottom: 30 }}>
								{this.renderTicketData(sitesData)}
							</View>
						</ScrollView>
					</View>
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

export default Home;
