import * as React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Button,
	Vibration,
	TouchableOpacity,
	TouchableNativeFeedback,
	Image,
	TextInput,
	AsyncStorage,
	Dimensions
} from 'react-native';

import { Constants } from 'expo';

import { MaterialIcons } from '@expo/vector-icons';

const {height, width} = Dimensions.get('window'); 

export class HomeScreen extends React.Component {


constructor(props) {
	super(props); 
	console.log(props.navigation.state)
}



render() {
	var  logoutHandler =(this.props.navigation.state.params)? this.props.navigation.state.params.logoutHandler : ()=>{console.log('empty method')};
	
	//console.log(this.props)
	//const logoutHandler = this.props.navigation.state.key('logoutHandler' ,false);

	return (
		<View style={{flex:1, backgroundColor:'#fff'}}>
			<Text>awdawdawdawd</Text>
			<Button title='Выйти'
			onPress={logoutHandler}
			
			>
			</Button>
		</View>
	);
}
}
