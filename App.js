//Try something intresting, the one more


import * as React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Button,
	TextInput,
	Vibration,
	TouchableOpacity,
	Image,
} from 'react-native'; 

import { createStackNavigator, NavigationActions, withNavigation } from 'react-navigation';
import { HomeScreen } from './components/HomeScreen';
import { AssetExample } from './components/AssetExample';
import BottomMenu from './components/BottomMenu';


const Navigator_1 = createStackNavigator(
	{
		Home: {
			screen: HomeScreen,
		},
		Asset: {
			screen: AssetExample,
			navigationOptions: {
				title: 'Настройки',
			},
		},
	}, {
		mode: 'card ',
		headerMode: 'float',
		headerTransitionPreset: "fade-in-place",
	}
);

class App extends React.Component {
	constructor(props) {
		super(props)
		
	}

	navigate = (where) => {
		this.navig.dispatch(	NavigationActions.navigate({routeName: where} ) )
		//return this.navig;
	 }

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Navigator_1 ref = { el  => { this.navig = el;  }} />
				<BottomMenu navigation={this.navigate}/>
			</View>
		)
	} 
}
export default App;