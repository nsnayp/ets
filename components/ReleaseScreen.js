import * as React from 'react';
import {
	Text,
	View,
	ScrollView,
	TouchableNativeFeedback,
	Image
} from 'react-native';


export class ReleaseScreen extends React.Component {


constructor(props) {
	super(props); 
}

renderImage=img=>{
	return(
		<View  key={img.key}><Image source={{uri:img.src}} style={{width:85, height:85, marginRight:3,}} /></View>
	)
}

renderRealese=detail=>{
	return(

		<View key={detail.key}>
			<TouchableNativeFeedback>
				<View style={{padding:16}}>
					<Text>Деталь: {detail.title}</Text>
					<Text>Количество штук: {detail.qty}</Text>
					<Text>Ячейка: {detail.storage}</Text>
					

				</View>
			</TouchableNativeFeedback>
			<ScrollView horizontal={true} style={{flexDirection:'row'}}>
					{Object.values(detail.images).map(img => this.renderImage(img))}
			</ScrollView>
		</View>
	)
}

render() {
	const {release} = this.props.navigation.state.params
	return (
		
		<View style={{flex:1, backgroundColor:'#fff'}}>
                                        <ScrollView>{Object.values(release.details).map(detail => this.renderRealese(detail))}</ScrollView>
		</View>
	);
}
}
