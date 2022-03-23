import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import {ListItem, Icon, BottomSheet, Button, Avatar, Card} from 'react-native-elements';
import QRCode from 'react-native-qrcode-svg';
import 'intl';
import 'intl/locale-data/jsonp/en';
import HeaderComponent from '../components/frequent/HeaderComponent';

class TicketDetail extends React.Component {

    constructor(props){
        super(props);
        this.state={

        }
    }

    renderDetailCard(item){
        const url = 'https://www.thoughtco.com/thmb/DBOgHVGLrn4Hy6OOlJxcdExAYuE=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg';
        return( 
            <Card key={item.id}
                containerStyle={{
                    backgroundColor: '#ffffff',
                    height: "96%",
                    borderRadius: 10, borderColor: 'black', borderWidth: 2, marginHorizontal: '3%',
                    borderStyle: 'dashed', 
                    marginTop: '3%',
                    marginBottom: '3%'
                }} style={{justifyContent:'center', backgroundColor: '#fff'}}>
                  <Text style={{textAlign: 'left'}}>
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
                <Card.Title style={{fontSize:20}}>{item.name}</Card.Title>
                <View style={{alignItems: 'center', marginBottom: 20, marginTop: 20}}>
                <QRCode
                  value={item.name}
                  size={220}
                  bgColor='#000000'
                  fgColor='#FFFFFF'
                  
                />
                </View>
                <Text style={{fontWeight: 'bold', color: 'black', marginLeft: "10%", marginTop: "2%"}}>
                    <Icon name='coins' type="font-awesome-5" color='black' size={18}
                        iconStyle={{marginRight: 10}} />Fee Paid {200}
                </Text>
                <Text style={{fontWeight: 'bold', color: 'black', marginLeft: "10%", marginTop: "2%"}}>
                    <Icon name='users' type="font-awesome-5" color='black' size={18}
                        iconStyle={{marginRight: 10}} />Pending Visitors {10}
                </Text>
                <Text style={{fontWeight: 'bold', color: 'black', marginLeft: "10%", marginTop: "2%"}}>
                    <Icon name='bars' type="font-awesome-5" color='black' size={18}
                        iconStyle={{marginRight: 10}} />Visitor Categories
                </Text>
                <Text style={{fontWeight: 'bold', color: 'black', marginLeft: "15%", marginTop: "2%"}}>
                    <Icon name='mars' type="font-awesome-5" color='black' size={18}
                        iconStyle={{marginRight: 10}} />Males {5}, Females {2}, others {1}
                </Text>
                <Text style={{fontWeight: 'bold', color: 'black', marginLeft: "15%", marginTop: "2%"}}>
                    <Icon name='glasses' type="font-awesome-5" color='black' size={18}
                        iconStyle={{marginRight: 10}} />Children {5}, Adults {2}, Seniors {1}
                </Text>
                <Text style={{fontWeight: 'bold', color: 'black', marginLeft: "15%", marginTop: "2%"}}>
                    <Icon name='flag' type="font-awesome-5" color='black' size={18}
                        iconStyle={{marginRight: 10}} />Local {5}, Foreigners {3}
                </Text>
            </Card> 
        )
    }

    render(){
        return (
            <View style={styles.container}>
              <HeaderComponent icon="info" heading="TICKET DETAILS" />
              <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#1572A1" translucent = {true}/>
              <ImageBackground source={require('../components/images/Tourist.jpeg')} style={styles.image}>
                <View style={{height:'100%', backgroundColor: "#fff"}}>
                    {this.renderDetailCard(this.props.route.params.ticketDetail)}
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
      flex: 1,
      backgroundColor: '#00000099'
    },
});

export default TicketDetail;