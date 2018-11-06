import * as React from 'react';
import { Text, View , TouchableNativeFeedback, Dimensions, TextInput, Animated,Easing, TouchableWithoutFeedback} from 'react-native';
import BottomMenu from '../components/BottomMenu';
import {HomeScreen} from '../components/HomeScreen';
import {AssetExample} from '../components/AssetExample';
import {ReleaseScreen} from '../components/ReleaseScreen';
import {SearchScreen} from '../components/SearchScreen';
import {ImageScreen} from '../components/ImageScreen';
import { createDrawerNavigator,NavigationActions } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';



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
	
	constructor(props) {
		super(props)
		this.logout = this.props.logout
		this.state = {
			currentRoute:0,
			widthSP:new Animated.Value(0),
		}
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

	getNavigParams=()=>{
		console.log(this.navig.state)
		this.navig.dispatch(NavigationActions.navigate( {routeName:screen, params: params} ))
	}
	curState = (state) =>{
		this.setState({currentRoute:state.index})
	}

	openSearchPanel=(e)=>{
		//requestAnimationFrame(() => {
		Animated.timing(this.state.widthSP, {
			toValue: 1 ,
			duration: 150,
  			easing:Easing.linear()
		}).start();
		this.searchPanel.focus()
		//})
	}
	hideSearchPanel=(e)=>{
		//requestAnimationFrame(() => {
		Animated.timing(this.state.widthSP, {
			toValue: 0 ,
			duration: 150,
  			easing:Easing.linear()
		}).start();
		//})
	}

	render() {
		let widthSP = this.state.widthSP.interpolate({
			inputRange: [0, 1],
			outputRange: [0, 345]
		});

		let widthWrapSP = this.state.widthSP.interpolate({
			inputRange: [0, 1],
			outputRange: [50, 345]
		});

		let opacitySP = this.state.widthSP.interpolate({
			inputRange: [0, 0.2, 1],
			outputRange: [0, 0.8 , 1]
		});
		let marginSP = this.state.widthSP.interpolate({
			inputRange: [0, 1],
			outputRange: [0, -295]
		});

		var color = this.state.widthSP.interpolate({
			inputRange: [0, 1],
			outputRange: ['rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)']
		});

		return (
			<View style={{flex:1, flexDirection:'column', overflow:'visible'}}>

				{ <View style={{width:'100%', backgroundColor:'#3F51B5', paddingTop:24, elevation:5, height:80}}>
					<View style={{paddingVertical:0, paddingHorizontal:8, flexDirection:'row', justifyContent:'space-between',position:'relative',  alignItems:'center', alignContent:'stretch'}}>
						
						
						<Animated.View style={{ position:'relative', left:marginSP, width:'75%'}}>
							<Text style={{color:'#fff', fontSize:16}}>ETS GROUP</Text>
						</Animated.View>
						<Animated.View style={{position:'relative',marginLeft:marginSP, width:widthWrapSP, flexDirection:'row', alignItems:'center', justifyContent:'center', height:56}}>
							
							<View style={{width:'100%', position:'relative', alignItems:'flex-end'}}>
								<Animated.View style={{width:widthSP,position:'relative',opacity:opacitySP}}>
									<TextInput ref={el => { this.searchPanel = el; }} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Поиск по номеру' style={{width:'100%', backgroundColor:'#fff', fontSize:15, paddingVertical:6, borderBottomWidth:0, borderRadius:4, borderWidth:0, paddingHorizontal:16, paddingLeft:40}}></TextInput>
									<View style={{position:'absolute', left:0}}>
										<TouchableNativeFeedback onPress={() =>
											
											this.hideSearchPanel()
										
										}>
										<View style={{ padding: 10, flexDirection: 'column', alignItems: 'center' }}>
											<Feather name="arrow-left" size={20} color="#999" style={{}} />
										</View>
										</TouchableNativeFeedback>
										

									</View>
									
								</Animated.View>

								<View style={{position:'absolute', right:0, zIndex:10}}>
									<View>
										<TouchableWithoutFeedback onPress={() =>
										
											this.openSearchPanel()
										
										}>
											<View style={{ padding: 10, flexDirection: 'column', alignItems: 'center' }}>
												<Feather name="search" size={20} color="#fff" style={{}} />
											</View>
										</TouchableWithoutFeedback>
									</View>
								</View>

							</View>

						</Animated.View>

						
						
						<View>
							<TouchableNativeFeedback onPress={() => this.navigate('Asset')}>
								<View style={{ padding: 8, flexDirection: 'column', alignItems: 'center' }}>
									<Feather name="shopping-cart" size={20} color="#fff" style={{}} />
								</View>
							</TouchableNativeFeedback>
						</View>
					</View>

					


				</View> }
				<Navigator
					onNavigationStateChange={(prevState, currentState) => {
						this.curState(currentState)
					}}
				 	ref={el => { this.navig = el; }} 
				 /> 
				<BottomMenu currentRoute={this.state.currentRoute} navigation={this.navigate}></BottomMenu>
			</View> 
		)
	}

}