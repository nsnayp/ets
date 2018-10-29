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


export default class AppNoAuth extends React.Component {

              constructor(props){
		super(props)
		this.state = {
			val: 0,
			token:'',
			email:null,
			password:null
		};
		this.login=this.props.login;
		
		AsyncStorage.getItem('token')
		.then(value => {
			this.setState({ token: value });
		})
		.done();
              }
              componentDidMount(){

              }
	btnPressed =()=> {
		var instance = this
		fetch('http://etsgroup.ru/call/test?token='+this.state.token+'&email='+this.state.email+'&password='+this.state.password)
		.then((response) => response.json())
		.then((responseJson) => {
			if(responseJson.response.error==0){
				instance.login()
				AsyncStorage.setItem('userKey', responseJson.response.userKey);
				
			}
			console.log(responseJson.response)
		})
		.catch((error) => {
			console.error(error);
		});
	}
              render(){
                            return(
                                          <View>
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
                            )
              }

}