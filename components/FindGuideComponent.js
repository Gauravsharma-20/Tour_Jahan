import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import HeaderComponent from './frequent/HeaderComponent';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFeather from 'react-native-vector-icons/Feather';
import {guideData} from '../data';

class FindGuide extends React.Component {
    renderListItem = (item) => {
      return(
        <ListItem key={item.id}
        style={{
          backgroundColor: "#00008B",
          marginBottom: "3%"
        }}

        >
          <Avatar rounded source={item.avatar_url?{uri:"https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"}:{uri:"https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"}} size={50}/>
            <ListItem.Content>
              <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
                {item.name}
              </ListItem.Title>
              <ListItem.Subtitle style={{ color: 'black' }}>
                {item.description}
              </ListItem.Subtitle>
              <Text style={{ color: 'red', marginBottom:'1%', marginTop:'1%'}}>
                <IconEntypo name="location-pin" size={20} style={{marginTop:'10%'}}/>
                  <Text style={{paddingBottom:'50%'}}>{item.location}</Text>
              </Text>
              <Text style={{ color: 'red', marginBottom:'1%', marginTop:'1%'}}>
                <IconFeather name="phone-call" size={20} style={{marginTop:'10%'}}/>
                  <Text style={{paddingBottom:'50%'}}>{item.contact}</Text>
              </Text>
            </ListItem.Content>
            {/* <ListItem.Chevron color="green" /> */}
        </ListItem>
      )
    
    }

    renderGuideData = (guideData) => {
      return(
        guideData.map((guide)=>{
          return this.renderListItem(guide);
        })
      )
    }


    render(){
        return (
            <View style={styles.container}>
              <HeaderComponent icon="user-tie" heading="GUIDES" />
              <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#1572A1" translucent = {true}/>
              <ImageBackground source={require('./images/Tourist.jpeg')} style={styles.image}>
                <View style={{height:'100%', backgroundColor: "#00000099"}}>
                  {this.renderGuideData(guideData)}

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

export default FindGuide;