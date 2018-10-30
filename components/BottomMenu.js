import * as React from 'react';
import {
	View,
	TouchableNativeFeedback,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


class BottomMenu extends React.Component {
	constructor(props) {
		super(props);
		console.log(props)
	}
	render() {

		return (
			
			<View style={{ backgroundColor: '#fff', width: '100%', justifyContent: 'space-evenly', alignItems: 'stretch', flexDirection: 'row', paddingHorizontal: 10, borderTopColor:'#eee', borderTopWidth:1, elevation: 10  }}>
				<View style={{ width: '25%' }}>
					<TouchableNativeFeedback  onPress={() => this.props.navigation('Home')} >
						<View style={{ padding: 10, flexDirection: 'column', alignItems: 'center' }}>
							<MaterialIcons name="home" size={30} color="#3F51B5" style={{}} />

						</View>
					</TouchableNativeFeedback>
				</View>
				<View style={{ width: '25%' }}>
					<TouchableNativeFeedback  onPress={() => this.props.navigation('Search')}>
						<View style={{ padding: 10, flexDirection: 'column', alignItems: 'center' }}>
							<MaterialIcons name="search" size={30} color="#666" style={{}} />
							{/* <Text style={{fontSize:12, color:'#999'}}>Домой</Text> */}
						</View>
					</TouchableNativeFeedback>
				</View>
				<View style={{ width: '25%' }}>
					<TouchableNativeFeedback onPress={() => this.props.navigation('Asset')}>
						<View style={{ padding: 10, flexDirection: 'column', alignItems: 'center' }}>
							<MaterialIcons name="settings" size={30} color="#666" style={{}} />
						</View>
					</TouchableNativeFeedback>
				</View>

				

				

			</View>
			
		)
	}
}
export default BottomMenu;