import * as React from 'react';
import {
	View,
	TouchableNativeFeedback,
	StyleSheet
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


class BottomMenu extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.currentRoute)
	}
	render() {

		return (
			
			<View style={{ backgroundColor: '#fff', width: '100%', justifyContent: 'space-evenly', alignItems: 'stretch', flexDirection: 'row', paddingHorizontal: 10, borderTopColor:'#eee', borderTopWidth:1, elevation: 10  }}>
				<View style={{ width: '25%' }}>
					<TouchableNativeFeedback  onPress={() => { this.props.navigation('Home'); }  } >
						<View style={{ padding: 10, flexDirection: 'column', alignItems: 'center' }}>
							<MaterialIcons name="home" size={30} color={ (this.props.currentRoute==0||this.props.currentRoute==2||this.props.currentRoute==4)?'#3F51B5':'#8a8a8a' }  />

						</View>
					</TouchableNativeFeedback>
				</View>
				<View style={{ width: '25%' }}>
					<TouchableNativeFeedback  onPress={() => this.props.navigation('Search')}>
						<View style={{ padding: 10, flexDirection: 'column', alignItems: 'center' }}>
							<MaterialIcons name="search" size={30} color={ (this.props.currentRoute==3)?'#3F51B5':'#8a8a8a' } />
							{/* <Text style={{fontSize:12, color:'#999'}}>Домой</Text> */}
						</View>
					</TouchableNativeFeedback>
				</View>
				<View style={{ width: '25%' }}>
					<TouchableNativeFeedback onPress={() => this.props.navigation('Asset')}>
						<View style={{ padding: 10, flexDirection: 'column', alignItems: 'center' }}>
							<MaterialIcons name="settings" size={30} color={ (this.props.currentRoute==1)?'#3F51B5':'#8a8a8a' } />
						</View>
					</TouchableNativeFeedback>
				</View>
			</View>
			
		)
	}
}

export default BottomMenu;