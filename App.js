//Try something intresting, the one more

// https://expo.io/dashboard/notifications  - эта штука реально отправляет нотифы даже закрытые
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
import {Notifications  } from 'expo';
import { createStackNavigator, NavigationActions, withNavigation } from 'react-navigation';
import { HomeScreen } from './components/HomeScreen';
import { AssetExample } from './components/AssetExample';
import BottomMenu from './components/BottomMenu';
import registerForPushNotificationsAsync from './components/registerForPushNotificationsAsync';

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


	state = {
		notification: {},
	            };
	          
	            componentDidMount() {
		registerForPushNotificationsAsync();

		this._notificationSubscription = Notifications.addListener(this._handleNotification);
	            }
	          
	            _handleNotification = (notification) => {
		this.setState({notification: notification});
	            };


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
				<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Origin: {this.state.notification.origin}</Text>
        <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
      </View>
				<BottomMenu navigation={this.navigate}/>
			</View>
		)
	} 
}
export default App;