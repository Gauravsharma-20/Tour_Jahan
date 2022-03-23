import * as React from 'react';
import {
	Text,
	View,
	StatusBar,
	ImageBackground,
	StyleSheet,
	Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import HeaderComponent from '../components/frequent/HeaderComponent';
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
						{/* <Button title="Fire test" onPress={() => test()} /> */}
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
