import * as React from 'react';
import {
	Text,
	View,
} from 'react-native';


export class ReleaseScreen extends React.Component {


constructor(props) {
	super(props); 
}

render() {
	const {release} = this.props.navigation.state.params
	return (
		
		<View style={{flex:1, backgroundColor:'#fff'}}>
                                          <Text>RELEASE {release.title}</Text>
		</View>
	);
}
}
