import * as React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Button
} from 'react-native';

export class AssetExample extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		var  logoutHandler =(this.props.navigation.state.params)? this.props.navigation.state.params.logoutHandler : ()=>{console.log('empty method')};
		return (
			<View style={[styles.container]}>
				<View style={{width:'100%', padding:40}}>
				<Text style={{fontSize:16, textAlign:'center'}}>Привет! Эта наша первая версия приложения, поэтому в настройках можно только выйти из аккаунта. Все вопросы и пожелания направляйте в отдел Развития.</Text>
				</View>
				<Button title='Выйти из аккаунта'
				onPress={logoutHandler}
			>
			</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		flexDirection:'column',
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
});
