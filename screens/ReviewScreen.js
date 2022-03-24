import * as React from 'react';
import {
	Text,
	View,
	StatusBar,
	StyleSheet,
	ImageBackground,
	Alert,
} from 'react-native';
import { Button, Input, Icon, Card} from 'react-native-elements';
import HeaderComponent from '../components/frequent/HeaderComponent';

class AddReview extends React.Component {

	constructor(props){
        super(props);
        this.state = {
            userName:"",
            email:"",
            password:"",
            errors:{
                userName:"",
                email:"",
                password:""
            }
        }
    }
    formValidation = ()=>{
        const {userName, email, password} = this.state;
        let userNameError ="", emailError="", passwordError="", error=false;
        if(!userName){
            error=true;
            userNameError="Username is required";
        }
        if(!email){
            error=true;
            emailError="Email is required";
        }else{
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(String(email).toLowerCase())){
                error = true
                emailError="Enter a valid email";
            }
        }
        if(!password){
            error=true;
            passwordError="Password is required";
        }else if(String(password).length<4){
            error=true;
            passwordError="Password should be 4 or more characters long";
        }
		this.setState({
            errors:{
                userName:userNameError,
                password:passwordError,
                email:emailError
            }
        })
        return !error;

    }

	handleSubmit= async()=>{
        const {userName, email, password} = this.state;
        if(this.formValidation()){
            Alert.alert("Success", "Review Added Successfuly!!");

            this.setState({
                userName:"",
                email:"",
                password:""
            })
        }
    }

	render() {
		return (
			<View style={styles.container}>
				<HeaderComponent icon='map-marker-alt' heading='REVIEWS' />
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
						style={{ height: '100%', backgroundColor: '#fff' }}
					>

				 		<View style={{marginHorizontal: '5%', marginTop:'10%'}}>
							<Input
								placeholder="Enter Email...."
								leftIcon={{ type: 'font-awesome-5', name: 'envelope', color: '#fea02f'}}
								leftIconContainerStyle={{marginRight: 10}}
								onChangeText={(email) => this.setState({email})}
								value={this.state.email}
								label='Email : '
								errorMessage = {this.state.errors.email}
								labelStyle={{color: '#003f5a'}}
								placeholderTextColor='#003f5a'
								style={{color: '#003f5a'}}
							/>

							<Input
								placeholder="Add Review...."
								leftIcon={{ type: 'font-awesome-5', name: 'edit', color: '#fea02f'}}
								leftIconContainerStyle={{marginRight: 10}}
								onChangeText={(userName) => this.setState({userName})}
								value={this.state.userName}
								label='Review : '
								errorMessage = {this.state.errors.userName}
								labelStyle={{color: '#003f5a'}}
								placeholderTextColor='#003f5a'
								style={{color: '#003f5a'}}
								multiline
							/>
							
							<View style={{marginHorizontal: '5%', marginVertical: '5%'}}>
								<Button
									onPress = {() => this.handleSubmit()}
									title="Submit Review"
									icon={{
										name: 'telegram',
										type: 'font-awesome',
										size: 20,
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
										marginVertical: 0,
										marginTop: 10
									}}
								/>
                        	</View>
							<Card.Image
								style={{
									padding: 0,
									marginBottom: 10,
									marginTop: 10,
									borderRadius: 12,
									height: 200,
								}}
								source={{
									uri:
									"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/375px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg", 
								}}
								/> 
							<Card.Title>{"Featured: Taj Mahal"}</Card.Title>
                    </View>
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

export default AddReview;
