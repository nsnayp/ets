import * as React from 'react';
import { Text, View } from 'react-native';
import BottomMenu from '../components/BottomMenu';
import {HomeScreen} from '../components/HomeScreen';
import {AssetExample} from '../components/AssetExample';
import { createDrawerNavigator,NavigationActions } from 'react-navigation';

const Navigator = createDrawerNavigator(
	{
		Home: {
			screen: HomeScreen,
		},
		Asset: {
			screen: AssetExample,
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
		this.navig.dispatch(NavigationActions.navigate( {routeName:'Home', params:  {  title:'hello',logoutHandler: this.logout} } ))
		
	}
	navigate = (screen) => {
		this.navig.dispatch(NavigationActions.navigate( {routeName:screen } ))
	}

	render() {
		return (
			<View style={{flex:1, flexDirection:'column'}}>
				<Navigator ref={el => { this.navig = el; }} /> 
				<Text>{this.state.someVar}</Text>
				<BottomMenu navigation={this.navigate}></BottomMenu>
			</View> 
		)
	}

}