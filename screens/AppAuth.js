import * as React from 'react';
import { Text, View , TouchableNativeFeedback, Dimensions} from 'react-native';
import BottomMenu from '../components/BottomMenu';
import {HomeScreen} from '../components/HomeScreen';
import {AssetExample} from '../components/AssetExample';
import {ReleaseScreen} from '../components/ReleaseScreen';
import {SearchScreen} from '../components/SearchScreen';
import {ImageScreen} from '../components/ImageScreen';
import { createDrawerNavigator,NavigationActions } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';



const Navigator = createDrawerNavigator(
	{
		Home: {
			screen: HomeScreen,
		},
		Asset: {
			screen: AssetExample,
		},
		Release: {
			screen: ReleaseScreen,
		},
		Search: {
			screen: SearchScreen,
		},
		Image: {
			screen: ImageScreen,
		},
	}
);

export default class AppAuth extends React.Component {
	state = {
		someVar: 'awdaw'
	}
	constructor(props) {
		super(props)
		this.logout = this.props.logout
		
	}

	  
	componentDidMount() {
		/*this.navig.dispatch(NavigationActions.navigate( {routeName:'Home', params:  {  title:'hello',logoutHandler: this.logout} } ))*/
		
	}
	navigate = (screen) => {
		var params = {}
		if(screen=='Asset'){
			params = {logoutHandler: this.logout}
			
		}
		this.navig.dispatch(NavigationActions.navigate( {routeName:screen, params: params} ))
	}


	render() {
		return (
			<View style={{flex:1, flexDirection:'column', overflow:'visible'}}>

				<View style={{width:'100%', height:80, backgroundColor:'#3F51B5', paddingTop:26, elevation:5}}>
					<View style={{paddingVertical:12, paddingHorizontal:16, flexDirection:'row', justifyContent:'space-between'}}>
						<Text style={{color:'#fff', fontSize:18}}>ETS.Склад</Text>
						<View>
							<TouchableNativeFeedback onPress={() => this.navigate('Asset')}>
								<View style={{ padding: 0, flexDirection: 'column', alignItems: 'center' }}>
									<MaterialIcons name="settings" size={28} color="#fff" style={{}} />
								</View>
							</TouchableNativeFeedback>
						</View>
					</View>

					


				</View>
				<Navigator ref={el => { this.navig = el; }} /> 
				<BottomMenu  navigation={this.navigate}></BottomMenu>
			</View> 
		)
	}

}