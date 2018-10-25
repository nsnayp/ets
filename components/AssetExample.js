import * as React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	ScrollView,
	AsyncStorage,
} from 'react-native';
import { Constants } from 'expo';
import BottomMenu from './BottomMenu';
export class AssetExample extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Настройки',
			headerStyle: {
				backgroundColor: '#eee',
			},
		};
	};
	constructor(props) {
		super(props);
		this.state = {
			ip: null,
			token:null,
			modalVisible: false,
			res: [
				{
					title: 'IP подключения',
					value: 'ip',
					funcPress: 'changeIp',
				},
				{ title: 'Таймер автозапуска', value: 'token' },
			],
		};
		AsyncStorage.getItem('ip')
			.then(value => {
				this.setState({ ip: value });
				console.log(value);
			})
			.done();
			AsyncStorage.getItem('token')
			.then(value => {
				this.setState({ token: value });

			})
			.done();
	}

	changeIp = () => {
		this.showModal();
	};
	showModal = () => {
		this.setState({
			modalVisible: true,
		});
	};
	renderItem = item => {
		var funct = item.funcPress;
		return (
			<View
				style={{
					backgroundColor: '#fff',
					width: '100%',
					padding: 15,
					borderBottomColor: '#fafafa',
					borderBottomWidth: 1,
				}}>
				<TouchableOpacity
					style={{ width: '100%', flexDirection: 'row' }}
					onPress={this[funct]}>
					<View style={{ width: '50%' }}>
						<Text style={{ color: '#333', fontSize: 16 }}>
							{item.title} {this.state.modalVisible}
						</Text>
					</View>
					<View style={{ width: '50%' }}>
						<Text
							style={{ color: '#44aacc', fontSize: 16, textAlign: 'right' }}>
							{this.state[item.value]}
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	};
	renderModal = () => {
		if (this.state.modalVisible) {
			return (
				<View
					style={{
						position: 'absolute',
						backgroundColor: '#0000008a',
						width: '100%',
						height: '100%',
						zIndex: 10,
						padding: 25,
						flex: 1,
					}}>
					<View
						style={{
							backgroundColor: '#fff',
							width: '100%',
							borderRadius: 6,
							padding: 16,
						}}>
						<Text style={{ fontSize: 18, fontWeight: 'bold', paddingBottom: 16 }}>
							IP Адрес подключения
            </Text>


						<TextInput
							style={{ height: 55, fontSize: 16, padding: 3, borderBottomColor: '#44aacc' }}
							onChangeText={text => {
								{
									this.setState({ ip: text }, () => {
										AsyncStorage.setItem('ip', text);
									});
								}
							}}
							value={this.state.ip}
						/>

						<View
							style={{
								paddingTop: 24,
								justifyContent: 'flex-end',
								alignItems: 'flex-end',
								flexDirection: 'row'
							}}>

							<TouchableOpacity
								onPress={() => {
									this.setState({ modalVisible: false, backgroundColor: 'transparent', color: '#eee' });
								}}
							>
								<Text style={{ color: "#44aacc", paddingRight: 40 }}>ОТМЕНА</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => {
									this.setState({ modalVisible: false });
								}}
								style={{}}
							>
								<Text style={{ color: "#44aacc", paddingRight: 20 }}>ОК</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			);
		} else {
			return null;
		}
	};
	render() {
		return (
			<View style={[styles.container]}>
				{this.renderModal()}
				<ScrollView>
					<Text>KEY1 = {this.state.token}</Text>
					<View style={{ alignSelf: 'flex-start', width: '100%', padding: 8 }}>
						{Object.values(this.state.res).map(item => this.renderItem(item))}
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
	},
});
