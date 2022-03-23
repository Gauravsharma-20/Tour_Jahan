import * as React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Header, Icon } from 'react-native-elements';


class HeaderComponent extends React.Component {

    render(){
        return (
            <View>
              <Header
                backgroundColor='#1597BB'
                elevated
                placement='center'
                centerComponent={{ text: this.props.heading, style: styles.heading }}
                rightComponent={
                    <Icon
                      name={this.props.icon}
                      type='font-awesome-5'            
                      size={24}
                      iconStyle={{ color: "white"}}
                    />
                }
                leftComponent={{
                  icon: 'menu',
                  color: '#fff',
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
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
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