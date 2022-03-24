import * as React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
class HeaderComponent extends React.Component {

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
	
    render(){

        let heading = this.state.locationAddress ? this.state.locationAddress.name+", "+this.state.locationAddress.city+", "+this.state.locationAddress.region : "National Museum, New Delhi";
        return (
            <View>
              <Header
                backgroundColor='white'
                elevated
                placement='left'
                centerComponent={{ text: heading, style: styles.heading }}
                rightComponent={
                    <Icon
                      name={this.props.icon}
                      type='font-awesome-5'            
                      size={24}
                      iconStyle={{ color: "#000075"}}
                    />
                }
                leftComponent={{
                  icon: 'menu',
                  color: '#000075',
                }}       
              >
              </Header>
            </View>
          );
    }
    
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: '#fd7e14',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlignVertical: 'center',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HeaderComponent;