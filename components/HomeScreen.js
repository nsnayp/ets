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
	Image,Platform
	
} from 'react-native';

import { Feather,MaterialIcons,FontAwesome } from '@expo/vector-icons';
//import { ScrollView } from 'react-native-gesture-handler';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export class OfferLine extends React.Component {
	constructor(props) {
		super(props)
		this.state = { ...this.props.offer}
		this.state.carMarginLeft=new Animated.Value(0)
		this.state.toCartQty = 1
	}

	
renderSrok=srok=>{
	if(srok==0){
		return(
			<View style={{flexDirection:'row',alignItems:'center'}}>
				<View style={{backgroundColor:'#4CAF50', width:16,borderRadius:2, height:16,borderColor:'#4CAF50'}}></View>
				<Text style={{marginLeft:10, fontSize:14, color:'green'}}>В наличии</Text>
			</View>
			
		)
	}else{
		return(
			<View style={{flexDirection:'row',alignItems:'center'}}>
				<View style={{backgroundColor:'#fff', width:16, height:16, borderRadius:2, borderWidth:2,borderColor:'#4CAF50'}}></View>
				<Text style={{marginLeft:10, fontSize:14, color:'#424242'}}>{srok} дн</Text>
			</View>
		)
	}
}

renderCart=offer=>{
	if(offer.inCart===false){
		return(
			<TouchableNativeFeedback
			onPress={(e)=>{
				requestAnimationFrame(() => {
				Animated.timing(this.state.carMarginLeft, {
					toValue: 1 ,
					duration: 250,
		  
					easing:Easing.elastic()
				  }).start();
				  
				})
			}}
			>
				<View style={{paddingVertical:8, paddingRight:10,paddingLeft:8, margin:-8, borderRadius:2, backgroundColor:'#fff'}}>
					<Feather name="shopping-cart" size={22} color="#999" style={{}} />
				</View>
			</TouchableNativeFeedback>
		)
	}else{
		return(
			<View style={{position:'relative'}}>
				<TouchableNativeFeedback
					onPress={(e)=>{
						requestAnimationFrame(() => {
							Animated.timing(this.state.carMarginLeft, {
								toValue: 1 ,
								duration: 250,
					  
								easing:Easing.elastic()
							  }).start();
						})
					}}
				>
					<View style={{paddingVertical:8, paddingRight:10,paddingLeft:8, margin:-8, borderRadius:2, backgroundColor:'#fff'}}>
						<Feather name="shopping-cart" size={22} color="#999" style={{}} />
					</View>
				</TouchableNativeFeedback>

				<View style={{position:'absolute', width:19, height:19, borderRadius:18, elevation:2, backgroundColor:'#f44336', padding:0, justifyContent:'center', left:15, top:-7}}>
					<Text style={{color:'#fff', fontSize:10, alignSelf:'center'}}>{this.state.cartQty}</Text>
				</View>

			</View>
		)
	}
}



render=()=>{
	let carMarginLeft = this.state.carMarginLeft.interpolate({
		inputRange: [0, 1],
		outputRange: [0, -410]
	  });
	  const offer = this.state;
	return(
		<Animated.View key={offer.key} style={{width:'300%', flexDirection:'row', marginLeft:carMarginLeft}}>
			<View  style={{width:'33.3333%', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:16,  paddingVertical:12, borderTopColor:'#fafafa', borderTopWidth:1}}>
				
				<View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', width:'25%'}}>
					{this.renderSrok(offer.srok)}	
				
				</View>
				<View  style={{width:'15%', alignItems:'flex-end', alignContent:'center', justifyContent:'center'}}>
					<Text style={{marginLeft:10, fontSize:14, color:'#424242'}}>{offer.qty} шт</Text>
				</View>

				<View  style={{width:'15%', alignItems:'center', justifyContent:'center', alignContent:'center', flexDirection:'row'}}>
					<View style={{width:5, height:14, marginRight:0, backgroundColor:'#4CAF50'}}></View>
					<View style={{width:5, height:14, marginRight:0, backgroundColor:'#4CAF50'}}></View>
					<View style={{width:5, height:14, marginRight:0, backgroundColor:'#4CAF50'}}></View>
					<View style={{width:5, height:14, marginRight:0, backgroundColor:'#4CAF50'}}></View>
					<View style={{width:5, height:14,  marginRight:0, backgroundColor:'#eee'}}></View>
				</View>

				<View  style={{width:'20%',alignItems:'center',  justifyContent:'center', alignContent:'center'}}>
					<Text style={{marginLeft:10, fontSize:14, color:'#424242'}}>{offer.price} ₽</Text>
				</View>
				<View>
					<View  style={{ alignItems:'flex-end'}}>
						<Feather name="info" size={22} color="#999" style={{}} />
					</View>
					{this.renderCart(offer)}
				</View>
				
			</View>
			<View  style={{width:'33.3333%', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:16,  paddingVertical:12, borderTopColor:'#fafafa', borderTopWidth:1}}>
				<View style={{flexDirection:'row', alignContent:'flex-start'}}>

					<TouchableNativeFeedback
					onPress={(e)=>{ this.setState({toCartQty:this.state.toCartQty-1}) }}
					>
						<View style={{paddingVertical:8, paddingRight:10,paddingLeft:8, margin:-8, marginRight:14, borderRadius:2, backgroundColor:'#fff'}}>
							<FontAwesome name="minus" size={22} color="#999" style={{}} />
						</View>
					</TouchableNativeFeedback>

					<View style={{paddingVertical:8, paddingRight:10,paddingLeft:8, margin:-8, marginRight:14, borderRadius:2, backgroundColor:'#fff'}}>
						<Text>{this.state.toCartQty}</Text>
					</View>
					<TouchableNativeFeedback
					onPress={(e)=>{ this.setState({toCartQty:this.state.toCartQty+1}) }}
					>
						<View style={{paddingVertical:8, paddingRight:10,paddingLeft:8, margin:-8, marginRight:14, borderRadius:2, backgroundColor:'#fff'}}>
							<FontAwesome name="plus" size={22} color="#999" style={{}} />
						</View>
					</TouchableNativeFeedback>
				</View>
				<View style={{flexDirection:'row', alignContent:'flex-end'}}>
				<TouchableNativeFeedback
					onPress={(e)=>{
						Animated.timing(this.state.carMarginLeft, {
							toValue: 0 ,
							duration: 250,
				  
							easing:Easing.elastic()
						  }).start();
						  this.setState({cartQty:null, inCart:false, toCartQty:1})
						  
					}}
				>
					<View style={{paddingVertical:8, paddingRight:10,paddingLeft:8, margin:-8, marginRight:14, borderRadius:2, backgroundColor:'#fff'}}>
						<MaterialIcons name="close" size={22} color="#f44336" style={{}} />
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback
					onPress={(e)=>{
						Animated.timing(this.state.carMarginLeft, {
							toValue: 0 ,
							duration: 250,
				  
							easing:Easing.elastic()
						  }).start();
						  this.setState({cartQty:this.state.toCartQty, inCart:true})
					}}
				>
					<View style={{paddingVertical:8, paddingRight:10,paddingLeft:8, margin:-8, borderRadius:2, backgroundColor:'#fff'}}>
						<Feather name="check" size={22} color="#4CAF50" style={{}} />
					</View>
				</TouchableNativeFeedback>
				</View>
				

			</View>
		</Animated.View>
	)
}
}

export class HomeScreen extends React.Component {

constructor(props) {
	super(props); 
	this.state = {
		carMarginLeft:new Animated.Value(0),
		scrollY: new Animated.Value(0),
		fxlock:false,
		pan: new Animated.ValueXY(),
		offers: [
			
			{
				oem:'95535642',
				brand:'ER',
				photos:[],
				key:4,
				offers:[
					{
						key:1,
						priceId:305,
						offerId:12314,
						inCart:false,
						hitId:134234,
						srok:0,
						qty:22,
						oem:'95535642',
						brand:'ER',
						price:'14 620',
						name:'Вал первичный 27T'
					},
					{
						key:2,
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
				key:5,
				offers:[
					{
						key:3,
						priceId:305,
						offerId:12314,
						inCart:false,
						hitId:134234,
						srok:0,
						qty:12,
						oem:'T17692',
						brand:'TAS',
						price:'14 853',
						name:'Вал первичный 27T'
					},
					{
						key:3,
						priceId:305,
						offerId:12314,
						inCart:false,
						hitId:134234,
						srok:2,
						qty:12,
						oem:'T17692',
						brand:'TAS',
						price:'14 651',
						name:'Вал первичный 27T'
					},
					{
						key:3,
						priceId:305,
						offerId:12314,
						inCart:false,
						hitId:134234,
						srok:2,
						qty:12,
						oem:'T17692',
						brand:'TAS',
						price:'14 800',
						name:'Вал первичный 27T'
					},
					
				]
			}
			,{
				oem:'1315202037',
				brand:'ZF',
				photos:[],
				key:5,
				offers:[
					{
						key:3,
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
					{
						key:3,
						priceId:305,
						offerId:12314,
						inCart:false,
						hitId:134234,
						srok:2,
						qty:12,
						oem:'T17692',
						brand:'TAS',
						price:'14 651',
						name:'Вал первичный 27T'
					},
					{
						key:3,
						priceId:305,
						offerId:12314,
						inCart:false,
						hitId:134234,
						srok:2,
						qty:12,
						oem:'T17692',
						brand:'TAS',
						price:'14 800',
						name:'Вал первичный 27T'
					},
					
				]
			},{
				oem:'T17692',
				brand:'TAS',
				photos:[],
				key:5,
				offers:[
					{
						key:3,
						priceId:305,
						offerId:12314,
						inCart:false,
						hitId:134234,
						srok:1,
						qty:12,
						oem:'T17692',
						brand:'TAS',
						price:'14 853',
						name:'Вал первичный 27T'
					},
					{
						key:3,
						priceId:305,
						offerId:12314,
						inCart:false,
						hitId:134234,
						srok:12,
						qty:12,
						oem:'T17692',
						brand:'TAS',
						price:'14 651',
						name:'Вал первичный 27T'
					},
					{
						key:3,
						priceId:305,
						offerId:12314,
						inCart:false,
						hitId:134234,
						srok:12,
						qty:12,
						oem:'T17692',
						brand:'TAS',
						price:'14 800',
						name:'Вал первичный 27T'
					},
					
				]
			},
					
			
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

renderOffer=offer=>{
	return (
		<OfferLine offer={offer}></OfferLine>
	)
}

renderOfferGroup = offerGroup =>{
	return(
		<View key={offerGroup.key} style={{marginBottom:24,}}>
			<View style={{ flexDirection:'row', justifyContent:'space-between',  paddingHorizontal:16, backgroundColor:'#fafafa', paddingVertical:8}}>
				<Text style={{fontWeight:'bold'}}>{offerGroup.brand} {offerGroup.oem}</Text>
				
			</View>
			{Object.values(offerGroup.offers).map(item => this.renderOffer(item))}
			<View style={{ flexDirection:'row', justifyContent:'flex-end',  paddingHorizontal:16,  paddingVertical:8}}>
				<Text style={{fontSize:13, color:'#86adde'}}>еще 5 предложений</Text>
			</View>
		</View>
	)
}
renderRealese= release =>{/*
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
		
		
	)*/
}

renderImages=()=>{
	return(
		<View style={{flexDirection:'row'}}>
			<View style={{padding:16}}>
				<Image source={{uri:'http://etsgroup.ru/assets/product/1000/tas/T17692.jpg'}} style={{width:80, height:80}}></Image>
			</View>
			<View style={{padding:16}}>
				<Image source={{uri:'http://etsgroup.ru/assets/product/1000/tas/T17692.jpg'}} style={{width:80, height:80}}></Image>
			</View>
		</View>
	)
}

render() {
	
	const scrollY = Animated.add(
		this.state.scrollY,
		Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
	  );
	  const headerTranslate = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [0, -HEADER_SCROLL_DISTANCE],
		extrapolate: 'clamp',
	  });
  
	  const imageOpacity = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
		outputRange: [1, 1, 0],
		extrapolate: 'clamp',
	  });
	  const imageTranslate = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE],
		outputRange: [0, 100],
		extrapolate: 'clamp',
	  });
	  
  
	  const titleScale = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
		outputRange: [1, 1, 0.8],
		extrapolate: 'clamp',
	  });
	  const titleTranslate = scrollY.interpolate({
		inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
		outputRange: [0, 0, -8],
		extrapolate: 'clamp',
	  });

	return (

		

		<View style={{flex:1, backgroundColor:'#fff', paddingTop:24}}>

				<View>
					<Animated.ScrollView 
					showsVerticalScrollIndicator={false}
					scrollEventThrottle={1}
					
					contentInset={{
						top: HEADER_MAX_HEIGHT,
					  }}
					  contentOffset={{
						y: -HEADER_MAX_HEIGHT,
					  }}
					onScroll={
							//e.nativeEvent.contentOffset.y -=10 

							Animated.event(
								[{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
								{ useNativeDriver: true },
							)

	
					}
					>
						<View style={styles.scrollViewContent}>
						{this.renderImages()}
						{Object.values(this.state.offers).map(item => this.renderOfferGroup(item))}
						{/*Object.values(this.state.releases).map(item => this.renderRealese(item))*/}
						</View>
					</Animated.ScrollView>


					<Animated.View style={[styles.header, {transform: [{ translateY: headerTranslate }], elevation:5}]}>
						<View style={{position:'relative', height:'100%'}}>
							<Animated.Image source={{uri:'http://etsgroup.ru/assets/img/ets.jpg'}} style={{ height:250, opacity: imageOpacity, transform: [{ translateY: imageTranslate }]}} ></Animated.Image>
							<Image source={{uri:'http://www.bigbangthinking.com/wp-content/uploads/revslider/home-dark/gradient.png'}} style={{width:'100%', height:250, position:'absolute', top:0}}></Image>
							<Animated.View style={{ position:'absolute', width:'100%', top:0, height:'100%', backgroundColor:'transparent', zIndex:10,  paddingHorizontal:16}}>
							
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