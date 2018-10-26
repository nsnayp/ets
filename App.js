//Try something intresting, the one more

// https://expo.io/dashboard/notifications  - эта штука реально отправляет нотифы даже закрытые
/*
https://docs.expo.io/versions/v30.0.0/distribution/building-standalone-apps
https://docs.expo.io/versions/latest/guides/push-notifications
https://docs.expo.io/versions/latest/guides/using-fcm
https://expo.io/dashboard/notifications
From work test
*/

import * as React from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import { createStackNavigator, NavigationActions } from 'react-navigation';
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
		logedIn:false,
		userKey:null
	};

	componentDidMount() {
		registerForPushNotificationsAsync();
		this._notificationSubscription = Notifications.addListener(this._handleNotification);
	}

	_handleNotification = (notification) => {
		this.setState({ notification: notification });
		/* Принудительный роут на страницу при клике на нотифи	*/
		this.navigate('Asset');
	};

	constructor(props) {
		super(props)

		AsyncStorage.getItem('userKey')
		.then(value => {
			console.log('userKey',value)
			if(value!=null){
				this.navigate('Asset');
				this.setState({ userKey: value, logedIn:true });
			}
		})
		.done();

	}

	/* Navig - ссылка ref из компонента навигатора в соседние компоненты */
	navigate = (where) => {
		this.navig.dispatch(NavigationActions.navigate({ routeName: where }))
	}
	renderMenu = () => {
		if(this.state.logedIn===true){
			return(<BottomMenu navigation={this.navigate} />);
		}else{
			return null
		}
	}
	render() {
		return (
			<View style={{ flex: 1 }}>
				<Navigator_1 ref={el => { this.navig = el; }} />
				{/*<View style={{ flex: , justifyContent: 'center', alignItems: 'center' }}>
					<Text>Origin: {this.state.notification.origin}</Text>
					<Text>Data: {JSON.stringify(this.state.notificationex)}</Text>
				</View>*/}
				{this.renderMenu()}
				
			</View>
		)
	}
}
export default App;