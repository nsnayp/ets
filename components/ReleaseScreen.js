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

renderImage=(img, count)=>{
	return(
		<View  key={img.key} style={{position:'relative', borderRadius:3, marginLeft:3}}>
			<Image source={{uri:img.src}} style={{width:60, height:60, borderRadius:3}} />
			<View style={{ position:'absolute', width:'100%', top:0, height:'100%', backgroundColor:'#2632387a', zIndex:10, paddingHorizontal:8, paddingVertical:3,  justifyContent:'flex-end' , borderRadius:3}}>
				{ <Text style={{color:'#fff', fontSize:12, width:'100%', textAlign:'center'}}>{count} фото</Text> }
			</View>
		</View>
	)
}

renderRealese=detail=>{
	return(

		<View key={detail.key}>
			
				<View style={{padding:16, justifyContent:'space-between',  flexDirection:'row', borderBottomColor:'#eee', borderBottomWidth:1	 }}>
					<View>
						<Text style={{fontWeight:'800'}}>{detail.title}</Text>
						<Text>Количество штук: {detail.qty}</Text>
						<Text>Ячейка: {detail.storage}</Text>
					</View>
					<View >
						{/* { <ScrollView horizontal={true} style={{flexDirection:'row'}}>
							{Object.values(detail.images).map(img => this.renderImage(img))}
						</ScrollView> } */}
						{  this.renderImage(detail.images[0], detail.images.length) }
					</View>
				</View>
			
			
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
