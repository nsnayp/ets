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
	AsyncStorage
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Passat Go',
			headerRight: (
				<TouchableOpacity
					style={{ width: '100%', alignSelf: 'flex-end', padding: 15 }}
					onPress={() => navigation.navigate('Asset')}>
					<MaterialIcons name="settings" size={24} color="#eee" />
				</TouchableOpacity>
			),
			headerStyle: {
				backgroundColor: '#eee',
			},
		};
	};

constructor(props) {
	super(props);
	this.state = {
		val: 0,
		token:'',
		email:null,
		password:null
	};

	AsyncStorage.getItem('token')
	.then(value => {
		this.setState({ token: value });
	})
	.done();

}

btnPressed =()=> {
	fetch('http://etsgroup.ru/call/test?token='+this.state.token+'&email='+this.state.email+'&password='+this.state.password)
	.then((response) => response.json())
	.then((responseJson) => {
		if(responseJson.response.error==0){
			AsyncStorage.setItem('userKey', responseJson.response.userKey);
			this.props.navigation.navigate('Asset');
		}
		console.log(responseJson.response)
	})
	.catch((error) => {
		console.error(error);
	});
}

render() {
	return (
		<View style={styles.container}>
			<View style={{height:'100%', width:'100%'}}>
				<View style={{width:'100%', justifyContent:'center', marginTop:50}}>
					<Image
						source={{uri:'http://etsgroup.ru/assets/img/ETSl.png'}}
						style={{
							width: 80,
							height:80,
							alignSelf:'center'
						}} 
					/> 
				</View>
				<View style={{width:'100%', paddingHorizontal:45, marginTop:40}}>
					<Text>Email</Text>
					<TextInput onChangeText={(text)=>this.setState({email:text})} style={{paddingVertical:10, paddingHorizontal:4, fontSize:17}}></TextInput>
					<Text>Пароль</Text>
					<TextInput onChangeText={(text)=>this.setState({password:text})} style={{paddingVertical:10, paddingHorizontal:4, fontSize:17}}></TextInput>
				</View>
				<View style={{justifyContent:'center', marginTop:10,paddingHorizontal:45, width:'100%'}}>
					<TouchableNativeFeedback onPress={this.btnPressed} >
						<View style={{ padding: 10, flexDirection: 'column', alignItems: 'center', backgroundColor:'blue' }}>
							<Text style={{color:'#fff'}}>Авторизоваться</Text>
						</View>
					</TouchableNativeFeedback>
				</View>
			</View>
		</View>
	);
}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',

		backgroundColor: '#fff',
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#34495e',
	},
});
