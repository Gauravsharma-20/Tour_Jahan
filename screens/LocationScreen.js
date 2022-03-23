import * as React from 'react';
import {
	Text,
	View,
	StatusBar,
	StyleSheet,
	ImageBackground,
	Dimensions,
	Alert
} from 'react-native';
import MapView, {Marker, Polygon} from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import HeaderComponent from '../components/frequent/HeaderComponent';

class FindLocation extends React.Component {

	constructor(props){
		super(props);
		this.state={
			errorMsg: null,
            latitude: 28.6119,
            longitude:  77.2193,
            location: null,
			locationAddress: null
		}
	}
	
	async componentDidMount(){
		let {status} = await Permissions.askAsync(Permissions.LOCATION);

            if(status !== 'granted'){
                this.setState({
                    errorMsg: 'Permission to access location is denied!'
                })
            }

            let location = await Location.getCurrentPositionAsync({});

            this.setState({
                location: location
            });

            if(this.state.errorMsg){
                Alert.alert(null, this.state.errorMsg);
                return;
            }

            var loc = JSON.parse(JSON.stringify(location));
            this.setState({
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude
            });

			try {
				let locationAddress = await Location.reverseGeocodeAsync({"latitude": this.state.latitude, "longitude": this.state.longitude})
				this.setState({
					locationAddress: locationAddress[0]
				});

			} catch (error) {
				Alert.alert(null, "Couldn't process location!");
			}
	}

	async setCustomLocation(e){
		let latitude = e.nativeEvent.coordinate.latitude;
		let longitude = e.nativeEvent.coordinate.longitude;
		var location = {};
		location.latitude = latitude;
		location.longitude = longitude;
		this.setState({
			latitude,longitude,
			location: location
		});

		try {
			let locationAddress = await Location.reverseGeocodeAsync({"latitude": this.state.latitude, "longitude": this.state.longitude})
			this.setState({
				locationAddress: locationAddress[0]
			});

		} catch (error) {
			Alert.alert(null, "Couldn't process location!");
		}
	}

	render() {
		let screenHeight = 2*Dimensions.get('window').height;

		return (
			<View style={styles.container}>
				<HeaderComponent icon='globe' heading='LOCATIONS' />
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
						<MapView 
                            region={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005
                            }}
							onLongPress={(e) => this.setCustomLocation(e)}
                            style={{height: screenHeight-500, width: Dimensions.get('window').width}}
                        >
							<Marker 
								coordinate={{
									latitude: this.state.latitude,
									longitude: this.state.longitude
								}}
								title={'Selected Location'}
							/>
						</MapView>
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

export default FindLocation;
