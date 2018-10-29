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
import registerForPushNotificationsAsync from './components/registerForPushNotificationsAsync';
import AppAuth from './screens/AppAuth';
import AppNoAuth from './screens/AppNoAuth';
import createIconSetFromFontello from '@expo/vector-icons/createIconSetFromFontello';


class App extends React.Component {

	state = {
		notification: {},
		logedIn:null,
		userKey:null
	};

	componentDidMount() {
		registerForPushNotificationsAsync();
		this._notificationSubscription = Notifications.addListener(this._handleNotification);
	}

	_handleNotification = (notification) => {
		this.setState({ notification: notification });
	};

	constructor(props) {
		super(props)

		this.logout = this.logout.bind(this)
		this.login = this.login.bind(this)
		AsyncStorage.getItem('userKey')
		.then(value => {
			if(value!=null){
				this.setState({ userKey: value, logedIn:true });
			}else{
				this.setState({ logedIn:false });
			}
		})
		.done();

	}
	logout() {
		console.log('logout')
		AsyncStorage.removeItem('userKey')
		this.setState({
			logedIn: false
		})
	}
	login() {
		console.log('login')
		this.setState({
			logedIn: true
		})
	}
	renderAppController = () => {
		if(this.state.logedIn===true){
			return(<AppAuth logout={this.logout} navig={this.navig}></AppAuth>);
		}else if(this.state.logedIn===false){
			return(<AppNoAuth login={this.login} ></AppNoAuth>);
		}else{
			return null;
		}
	}
	
	render() {
		return (
			<View style={{ flex: 1, padding:1, paddingTop:26 }}>
				{/*<View style={{ flex: , justifyContent: 'center', alignItems: 'center' }}>
					<Text>Origin: {this.state.notification.origin}</Text>
					<Text>Data: {JSON.stringify(this.state.notificationex)}</Text>
				</View>*/}
				{this.renderAppController() } 
			</View>
		)
	}
}
export default App;