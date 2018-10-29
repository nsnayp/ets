import * as React from 'react';
import {
	View,
	TouchableNativeFeedback,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


class BottomMenu extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}
	render() {
		//const { navigate } = this.props.navigation;
		
		return (
			<View style={{ backgroundColor: '#fafafa', width: '100%', justifyContent: 'space-evenly', alignItems: 'stretch', flexDirection: 'row', paddingHorizontal: 10 }}>
				<View style={{ width: '25%' }}>
					<TouchableNativeFeedback  onPress={() => this.props.navigation('Home')} >
						<View style={{ padding: 10, flexDirection: 'column', alignItems: 'center' }}>
							<MaterialIcons name="home" size={30} color="#333" style={{}} />

						</View>
					</TouchableNativeFeedback>
				</View>

				<View style={{ width: '25%' }}>
					<TouchableNativeFeedback onPress={() => this.props.navigation('Asset')}>
						<View style={{ padding: 10, flexDirection: 'column', alignItems: 'center' }}>
							<MaterialIcons name="settings" size={30} color="#333" style={{}} />
						</View>
					</TouchableNativeFeedback>
				</View>

				<View style={{ width: '25%' }}>
					<TouchableNativeFeedback >
						<View style={{ padding: 10, flexDirection: 'column', alignItems: 'center' }}>
							<MaterialIcons name="menu" size={30} color="#333" style={{}} />
							{/* <Text style={{fontSize:12, color:'#999'}}>Домой</Text> */}
						</View>
					</TouchableNativeFeedback>
				</View>

				<View style={{ width: '25%' }}>
					<TouchableNativeFeedback >
						<View style={{ padding: 10, flexDirection: 'column', alignItems: 'center' }}>
							<MaterialIcons name="photo" size={30} color="#333" style={{}} />
							{/* <Text style={{fontSize:12, color:'#999'}}>Домой</Text> */}
						</View>
					</TouchableNativeFeedback>
				</View>


			</View>
		)
	}
}
export default BottomMenu;