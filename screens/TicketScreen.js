import * as React from 'react';
import { View, StatusBar, StyleSheet, ImageBackground, Text } from 'react-native';
import { Button, ListItem, Avatar, Icon, Card, SearchBar } from 'react-native-elements';
//import HeaderComponent from './frequent/HeaderComponent';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import {ticketData} from '../data';
import { collection, getDocs } from "firebase/firestore";
import { sitesData } from '../data/sitesData';
import { db } from '../firebase/firebase';
import { ScrollView } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';
import { CardNine, CardEcomOne } from 'react-native-card-ui';
import HeaderComponent from '../components/frequent/HeaderComponent';


class MyTickets extends React.Component {

    constructor(props){

      super(props);
      this.state={
          searchFilter: '',
          sites: []
      }
      this.arrayHolder = [];
    }

    async componentDidMount(){

      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
        });
      } catch (error) {
        console.log(error);
      }

    }

    updateSearch = async (searchFilter) => {

      this.setState({ searchFilter });

      if(searchFilter.length< 3){

          this.setState({
              sites: [],
              searchErr: '*Enter atleast 3 characters to begin search.'
          });
      }
      else if(searchFilter.length >= 2){
    const newData = this.arrayHolder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = searchFilter.toUpperCase();
  
      return itemData.indexOf(textData) > -1;
    });
  
      this.setState({
      sites: newData,
      })
      }
  };

    renderTicketData = (sitesData) => {
      return(
        sitesData.map((ticket)=>{
          return (
          <Card containerStyle={{
              backgroundColor: '#fff',
              borderRadius: 12, borderColor: 'grey', borderWidth: 2, marginHorizontal: '3%', 
              marginTop: '3%'
          }} style={{justifyContent:'center'}}>
            <Card.Title>{ticket.Name}</Card.Title>
            <Card.Image
              style={{ padding: 0, marginBottom: 10 }}
              source={{
                uri:
                  ticket.ImageUrl[0]
              }}
            /> 
            <Text style={{fontWeight: 'bold', color: 'black', marginLeft: "0%", marginTop: "2%"}}>
                <Icon name='calendar' type="font-awesome-5" color='black' size={18}
                    iconStyle={{marginRight: 10}} />
                  Issued On {new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour:'numeric', minute:'numeric'}).format(new Date(Date.parse("2022-03-22T04:58:10.539+00:00")))}
            </Text>
            <Text style={{fontWeight: 'bold', color: 'black', marginLeft: "0%", marginTop: "2%"}}>
                <Icon name='hourglass' type="font-awesome-5" color='black' size={18}
                    iconStyle={{marginRight: 10}} />
                  Expires On {new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'long', year: 'numeric', hour:'numeric', minute:'numeric'}).format(new Date(Date.parse("2022-03-22T04:58:10.539+00:00")))}
            </Text>
            <Button
              title="VIEW"
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
              onPress={() => this.props.navigation.navigate('TICKET DETAILS',
              {ticketDetail: ticket}
              )}
            />
          </Card>)
        })
      )
    }

    render(){
        return (
            <View style={styles.container}>
              <HeaderComponent icon="ticket-alt" heading="TICKETS" />
              <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#1572A1" translucent = {true}/>
              <ImageBackground source={require('../components/images/Tourist.jpeg')} style={styles.image}>
                <View style={{height:'100%', backgroundColor: "#00000099"}}>
                  <SearchBar
                        placeholder="Search Tickets by Names, Dates..."
                        onChangeText={this.updateSearch}
                        onClear={() => this.setState({
                            birds: []
                        })}
                        value={this.state.searchFilter}
                        clearIcon={{size: 20}}
                        searchIcon={{size: 25}}
                        round
                        clear
                        lightTheme
                    />
                  <ScrollView style={styles.scrollView}>
                    <View style={{marginBottom: 30}}>
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

  container:{
      flex: 1,
      flexDirection: 'column'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  fact: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 30,
    textAlign: 'center'
  },
  wish: {
    flex: 1,
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: 'center',
    flex: 0.2,

  },
  name: {
    flex: 1,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: 'center',
    flex: 0.2
  },
  section: {
    flex: 1,
    textAlign: "center",
  },
  scrollView: {
    
    marginTop: 0
  },
  ticketCard: {
    borderRadius: 20
  }
});

export default MyTickets;


