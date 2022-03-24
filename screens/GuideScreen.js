import * as React from 'react';
import {
	Text,
	View,
	StatusBar,
	StyleSheet,
	ImageBackground,
	ScrollView,
	Image,
} from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import HeaderComponent from '../components/frequent/HeaderComponent';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import { guideData } from '../data/guideData';
import verifyImage from '../components/images/verify.png';

class FindGuide extends React.Component {
	renderListItem = (item) => {
		return (
			<ListItem
				key={item.id}
				style={{
					backgroundColor: '#f3f4f4',
					marginBottom: '0%',
					borderRadius: 12,
					// borderColor: 'grey',
					// borderWidth: 1,
					// elevation: 0.5,
					// shadowColor: "#000000",
					// shadowOpacity: 0.8,
				}}
			>
				<Avatar
					rounded
					source={
						item.imageUrl
							? { uri: item.imageUrl }
							: {
									uri: 'https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
							  }
					}
					size={75}
				/>
				<ListItem.Content>
					<ListItem.Title
						style={{ color: 'black', fontWeight: 'bold' }}
					>
						{item.Name}
						{' '}
						{item.verified ? (
							<Icon
								name='check-circle'
								type='font-awesome-5'
								color='#00acee'
								solid={true}
								size={14}
								iconStyle={{ marginRight: 10 }}
							/>
						) : (
							<Text></Text>
						)}
					</ListItem.Title>
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							flexWrap: 'wrap',
							alignItems: 'flex-start',
						}}
					>
						<View style={{ width: '90%' }}>
							<Text
								style={{
									color: 'black',
									marginBottom: '1%',
									marginTop: '1%',
								}}
							>
								<IconFeather
									name='phone-call'
									size={15}
									style={{ marginTop: '10%' }}
								/>{'  '}
								<Text style={{ paddingBottom: '50%' }}>
									{item.Contact}
								</Text>
							</Text>
							<Text
								style={{
									color: 'black',
									marginBottom: '1%',
									marginTop: '1%',
								}}
							>
								<IconEntypo
									name='location-pin'
									size={20}
									style={{ marginTop: '10%' }}
								/>
								<Text style={{ paddingBottom: '50%' }}>
									{item.WorkCity + ', ' + item.WorkState}
								</Text>
							</Text>
						</View>
						{/* <View style={{ width: '10%' }}>
							{item.verified ? (
								<Image
									source={verifyImage}
									style={{ width: 30, height: 30 }}
								/>
							) : (
								<Text></Text>
							)}
						</View> */}
					</View>
				</ListItem.Content>
			</ListItem>
		);
	};

	renderGuideData = (guideData) => {
		return guideData.map((guide) => {
			return this.renderListItem(guide);
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<HeaderComponent icon='user-tie' heading='GUIDES' />
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
					<ScrollView
						style={{ height: '100%', backgroundColor: 'white' }}
					>
						{this.renderGuideData(guideData)}
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
		backgroundColor: 'white',
	},
});

export default FindGuide;
