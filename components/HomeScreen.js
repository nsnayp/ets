import * as React from 'react';
import {
	Text,
	View,
	TouchableNativeFeedback,
	ActivityIndicator,
	PanResponder,
	Animated,
	Dimensions,
	Easing,
	ScrollView,
	StyleSheet,
	Image
	
} from 'react-native';

import { Feather } from '@expo/vector-icons';
//import { ScrollView } from 'react-native-gesture-handler';
const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
export class HomeScreen extends React.Component {

constructor(props) {
	super(props); 
	this.state = {
		scrollY: new Animated.Value(0),
		pan: new Animated.ValueXY(),
		offers: [
			
			{
				oem:'95535642',
				brand:'ER',
				photos:[],
				offers:[
					{
						key:1,
						priceId:305,
						offerId:12314,
						inCart:true,
						hitId:134234,
						srok:0,
						qty:22,
						oem:'95535642',
						brand:'ER',
						price:'14 620',
						name:'Вал первичный 27T'
					},
					{
						key:1,
						priceId:305,
						offerId:12314,
						inCart:false,
						hitId:134234,
						srok:1,
						qty:1,
						oem:'95535642',
						brand:'ER',
						price:'17 038',
						name:'Вал первичный 27T'
					},
				]
			},{
				oem:'T17692',
				brand:'TAS',
				photos:[],
				offers:[
					{
						key:1,
						priceId:305,
						offerId:12314,
						inCart:false,
						hitId:134234,
						srok:1,
						qty:12,
						oem:'T17692',
						brand:'TAS',
						price:'13 353',
						name:'Вал первичный 27T'
					},
					
				]
			}
					
			
		],
		releases: [
			{
				key: 1,
				title: '#128354',
				date: '30-10-2018 09:02',
				details:[
					{	
						key: 1,
						title:'1315202037 ZF',
						qty:2,
						storage:'49-1-1',
						images:[
							{
								key:1,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							},
							{	
								key:2,
								src:'http://etsgroup.ru/assets/product/255/cei/190304.jpg'
							}
							,
							{
								key:3,
								src:'http://etsgroup.ru/assets/product/1000/er/95535642.jpg'
							}
							,
							{	
								key:4,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							}
							,
							{	
								key:5,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							}
							,
							{	
								key:6,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							}
							,
							{	key:7,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							}
							,
							{	
								key:8,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							}
						]
					},
					{
						key: 2,
						title:'9552132 ER',
						qty:2,
						storage:'49-1-1',
						images:[]
					},
					{
						key: 2,
						title:'9552132 ER',
						qty:2,
						storage:'49-1-1',
						images:[
							{	
								key:1,
								src:'http://etsgroup.ru/assets/product/1000/bosch/0451103033_6.jpg'
							},
							{	key:2,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							}
						]
					},
					{
						key: 2,
						title:'9552132 ER',
						qty:2,
						storage:'49-1-1',
						images:[
							{	
								key:1,
								src:'http://etsgroup.ru/assets/product/1000/bosch/0451103033_2.jpg'
							},
							{	key:2,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							}
						]
					},
					{
						key: 2,
						title:'9552132 ER',
						qty:2,
						storage:'49-1-1',
						images:[
							{	
								key:1,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							},
							{	key:2,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							}
						]
					},
					{
						key: 2,
						title:'9552132 ER',
						qty:2,
						storage:'49-1-1',
						images:null
					},
					{
						key: 2,
						title:'9552132 ER',
						qty:2,
						storage:'49-1-1',
						images:[]
					},
					{
						key: 2,
						title:'9552132 ER',
						qty:2,
						storage:'49-1-1',
						images:[
							{	
								key:1,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							},
							{	key:2,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							}
						]
					},
					{
						key: 2,
						title:'9552132 ER',
						qty:2,
						storage:'49-1-1',
						images:[
							{	
								key:1,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							},
							{	key:2,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							}
						]
					},
					{
						key: 2,
						title:'9552132 ER',
						qty:2,
						storage:'49-1-1',
						images:[
							{	
								key:1,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							},
							{	key:2,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							}
						]
					},
					{
						key: 2,
						title:'9552132 ER',
						qty:2,
						storage:'49-1-1',
						images:[
							{	
								key:1,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							},
							{	key:2,
								src:'http://etsgroup.ru/assets/product/255/tas/T17692.jpg'
							}
						]
					},
				]

				
			},
			{
				key: 2,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 3,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 4,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 5,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 6,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 7,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 8,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 9,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
			{
				key: 10,
				title: '#128355',
				date: '30-10-2018 09:04',
			},
		],
	};
}
translateY = new Animated.Value(0);
offsetTop = 0;

getDirection = ({ moveX, moveY, dx, dy}) => {
	const draggedDown = dy > 20;
	const draggedUp = dy < -20;
	const draggedLeft = dx < -20;
	const draggedRight = dx > 20;

	let dragDirection = '';
  
	if (draggedDown || draggedUp) {
	  if (draggedDown) dragDirection += 'dragged down '
	  if (draggedUp) dragDirection +=  'dragged up ';
	}
  
	if (draggedLeft || draggedRight) {
	  if (draggedLeft) dragDirection += 'dragged left '
	  if (draggedRight) dragDirection +=  'dragged right ';
	}
  	if (dragDirection) return dragDirection;
}


_panResponder = PanResponder.create({
    /*onMoveShouldSetResponderCapture: () => true,
	onMoveShouldSetPanResponderCapture: () => true,*/
	onMoveShouldSetPanResponder:(evt, gestureState) => !!this.getDirection(gestureState),
	onPanResponderMove:(e, gest) => {

		
		if(gest.dy < 120&&gest.dy>0){
			Animated.event([
				null, 
				{dy: this.translateY},
			])(e, gest)
		}else if(gest.dy<0){
			let newGest = {dy:(this.offsetTop + gest.dy)}
			Animated.event([
				null, 
				{dy: this.translateY},
			])(e, newGest)
		}
	},


    onPanResponderRelease: (e, gest) => {
	  /*const screenWidth = Dimensions.get("window").height;
	  this.offsetTop = dy
      if (dy>0) {
        Animated.timing(this.translateY, {
          toValue: 40 ,
		  duration: 350,

		  easing:Easing.elastic(1.2)
		}).start(this.props.onDismiss);
		
	  }*/
	  console.log(gest)
    }
});


navigateToRelease=(release)=>{
	this.props.navigation.navigate({routeName:'Release', params:  {  release:release } })
}

_onPress = (release) =>{
	requestAnimationFrame(() => {
		this.navigateToRelease(release)
	})  
}

renderSrok=srok=>{
	if(srok==0){
		return(
			<View style={{flexDirection:'row',alignItems:'center'}}>
				<View style={{backgroundColor:'green', width:16,borderRadius:2, height:16,borderColor:'green'}}></View>
				<Text style={{marginLeft:10, fontSize:16, color:'green'}}>наличие</Text>
			</View>
			
		)
	}else{
		return(
			<View style={{flexDirection:'row',alignItems:'center'}}>
				<View style={{backgroundColor:'#fff', width:16, height:16, borderRadius:2, borderWidth:2,borderColor:'green'}}></View>
				<Text style={{marginLeft:10, fontSize:16}}>{srok} дн</Text>
			</View>
		)
	}
}

renderCart=offer=>{
	if(offer.inCart===false){
		return(
			<TouchableNativeFeedback>
				<View style={{paddingVertical:8, paddingRight:10,paddingLeft:8, margin:-8, borderRadius:2, backgroundColor:'#dbdbdb'}}>
					<Feather name="shopping-cart" size={22} color="#999" style={{}} />
				</View>
			</TouchableNativeFeedback>
		)
	}else{
		return(
			<View style={{position:'relative'}}>
				<TouchableNativeFeedback>
					<View style={{paddingVertical:8, paddingRight:10,paddingLeft:8, margin:-8, borderRadius:2, backgroundColor:'#dbdbdb'}}>
						<Feather name="shopping-cart" size={22} color="#666" style={{}} />
					</View>
				</TouchableNativeFeedback>

				<View style={{position:'absolute', width:18, height:18, borderRadius:18, elevation:2, backgroundColor:'green', padding:0, justifyContent:'center', left:-18, top:2}}>
					<Text style={{color:'#fff', fontSize:10, alignSelf:'center'}}>12</Text>
				</View>

			</View>
		)
	}
}

renderOffer=offer=>{
	return(
		<View key={1} style={{ flexDirection:'row', justifyContent:'space-between', paddingHorizontal:16,  paddingVertical:12, borderTopColor:'#fafafa', borderTopWidth:1}}>
			
			<View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', width:'25%'}}>
				{this.renderSrok(offer.srok)}	
			
			</View>
			<View key={offer.brand} style={{width:'15%', alignItems:'flex-end'}}>
				<Text style={{marginLeft:10, fontSize:16}}>{offer.qty} шт</Text>
			</View>
			<View key={offer.brand} style={{width:'25%',alignItems:'flex-end'}}>
				<Text style={{marginLeft:10, fontSize:16}}>{offer.price} ₽</Text>
			</View>
			{this.renderCart(offer)}
			
		</View>
	)
}

renderOfferGroup = offerGroup =>{
	return(
		<View style={{marginBottom:24,}}>
			<View key={1} style={{ flexDirection:'row', justifyContent:'space-between',  paddingHorizontal:16, backgroundColor:'#fafafa', paddingVertical:8}}>
				<Text style={{fontWeight:'bold'}}>{offerGroup.brand} {offerGroup.oem}</Text>
				{/* <View>
					<Feather name="camera" size={16} color="#999" style={{}} />
				</View>
				<View>
					<Text style={{color:'blue', fontSize:11}}>еще предложения</Text>
				</View> */}
			</View>
			{Object.values(offerGroup.offers).map(item => this.renderOffer(item))}
		</View>
	)
}
renderRealese= release =>{
	return(
		
		<View key={release.key} style={[ {borderBottomColor:'#eee', borderBottomWidth:1}]}>
			
			<TouchableNativeFeedback
			onPress={()=>{this._onPress(release)}}>
				<View style={{width:'100%', flexDirection:'row', justifyContent:'space-between',padding:16}}>
					<View style={{}}>
						<Text>Реализация номер: {release.title}</Text>
						<Text>Дата документа: {release.date}</Text>
						<Text>Количество позиций: {release.details&& release.details.length}</Text>
						
					</View>
					<View style={{flexDirection:'column', justifyContent:'center'}}>
						<View style={{width:7, height:7, borderRadius:7, backgroundColor:'#3F51B5'}}></View>
					</View> 
				</View>
				
			</TouchableNativeFeedback>
			
		</View>
		
		
	)
}



render() {
	
	const headerHeight = this.state.scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
		extrapolate: 'clamp',
	});

	const headerHeight1 = this.state.scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [0, -70],
		extrapolate: 'clamp',
	});

	const headerHeight2 = this.state.scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [30, 16],
		extrapolate: 'clamp',
	});

	return (

		

		<View style={{flex:1, backgroundColor:'#fff', paddingTop:24}}>

				<View>
					<ScrollView 
					showsVerticalScrollIndicator={false}
					scrollEventThrottle={16}
					onScroll={Animated.event(
						[{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
					)}
					>
						<View style={styles.scrollViewContent}>
						{Object.values(this.state.offers).map(item => this.renderOfferGroup(item))}
						{/*Object.values(this.state.releases).map(item => this.renderRealese(item))*/}
						</View>
					</ScrollView>


					<Animated.View style={[styles.header, {height: headerHeight,elevation:5}]}>
						<View style={{position:'relative', height:'100%'}}>
							<Animated.Image source={{uri:'http://etsgroup.ru/assets/product/1000/tas/T17692.jpg'}} style={{ height:250, marginTop:headerHeight1}} ></Animated.Image>
							<Image source={{uri:'http://www.bigbangthinking.com/wp-content/uploads/revslider/home-dark/gradient.png'}} style={{width:'100%', height:250, position:'absolute', top:0}}></Image>
							<Animated.View style={{ position:'absolute', width:'100%', top:0, height:'100%', backgroundColor:'#252829b3', zIndex:10, paddingVertical:headerHeight2, paddingHorizontal:16}}>
							
								<Animated.Text style={{color:'#fff', fontWeight:'bold' , fontSize:18}}>ZF 1315202037</Animated.Text>
								<Animated.Text style={{color:'#fff',  fontSize:16, marginTop:20}}>{`Вал первичный\nс натяжителем чего-то там`}</Animated.Text>
								<Feather name="camera" size={28} color="#fff" style={{}} />
							<Feather name="filter" size={28} color="#fff" style={{}} />
							<Feather name="menu" size={28} color="#fff" style={{}} />
							</Animated.View>
						</View>
  					</Animated.View>

				</View>
			
		</View>  
	);
}
}


const styles = StyleSheet.create({
	scrollViewContent: {
		marginTop: HEADER_MAX_HEIGHT,
		minHeight:600
	},
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		backgroundColor: '#03A9F4',
		overflow: 'hidden',
	  }
  });