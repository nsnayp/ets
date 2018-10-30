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
import { ScrollView } from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window'); 

export class HomeScreen extends React.Component {


constructor(props) {
	super(props); 
	//console.log(props.navigation)
	this.state = {
		releases: [
			{
				key: 1,
				title: '#128354',
				date: '30-10-2018 09:02',
			},
			{
				key: 2,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 3,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 4,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 5,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 6,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 7,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 8,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 9,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 10,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
		],
	};
}

navigateToRelease=(release)=>{
	this.props.navigation.navigate({routeName:'Release', params:  {  release:release } })
}

renderRealese= release =>{
	return(
		<View key={release.key}>
			<TouchableNativeFeedback
			onPress={ ()=>{ this.navigateToRelease(release)} }>
				<View style={{padding:16}}>
					<Text>Реализация номер {release.title}</Text>
					<Text>{release.date}</Text>
				</View>
			</TouchableNativeFeedback>
		</View>
		
	)
}



render() {
	var  logoutHandler =(this.props.navigation.state.params)? this.props.navigation.state.params.logoutHandler : ()=>{console.log('empty method')};
	
	//console.log(this.props)
	//const logoutHandler = this.props.navigation.state.key('logoutHandler' ,false);

	return (
		<View style={{flex:1, backgroundColor:'#fff'}}>

			<ScrollView>{Object.values(this.state.releases).map(item => this.renderRealese(item))}</ScrollView>
			{/* <Button title='Выйти'
			onPress={logoutHandler}
			
			>
			</Button> */}
		</View>
	);
}
}
