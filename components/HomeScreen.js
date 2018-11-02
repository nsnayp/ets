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
		releases1: [
			{
				key:1,
				oem:'1315202037',
				brand:'ZF',
				price:'13 500',
				name:'Вал первичный 27T'
			},
			{
				key:1,
				oem:'1315202037',
				brand:'ZF',
				price:'13 500',
				name:'Вал первичный 27T'
			},
			{
				key:1,
				oem:'1315202037',
				brand:'ZF',
				price:'13 500',
				name:'Вал первичный 27T'
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
renderRealese1= release =>{
	return(
		<View key={release.key} style={[ {borderBottomColor:'#eee', borderBottomWidth:1}]}>
			<Text>{JSON.stringify(release)}</Text>
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
		outputRange: [22, 16],
		extrapolate: 'clamp',
	});

	return (

		

		<View style={{flex:1, backgroundColor:'#fff'}}>

				<View>
					<ScrollView 
					showsVerticalScrollIndicator={false}
					scrollEventThrottle={16}
					onScroll={Animated.event(
						[{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
					)}
					>
						<View style={styles.scrollViewContent}>
						{Object.values(this.state.releases1).map(item => this.renderRealese1(item))}
						{Object.values(this.state.releases).map(item => this.renderRealese(item))}
						</View>
					</ScrollView>
					<Animated.View style={[styles.header, {height: headerHeight}]}>
						<View style={{position:'relative', height:'100%'}}>
							<Animated.Image source={{uri:'http://etsgroup.ru/assets/product/1000/tas/T17692.jpg'}} style={{ height:250, marginTop:headerHeight1}} ></Animated.Image>
							<Image source={{uri:'http://www.bigbangthinking.com/wp-content/uploads/revslider/home-dark/gradient.png'}} style={{width:'100%', height:250, position:'absolute', top:0}}></Image>
							<Animated.View style={{ position:'absolute', width:'100%', top:0, height:'100%', backgroundColor:'#252829b3', zIndex:10, padding:headerHeight2}}>
								<Animated.Text style={{color:'#fff', fontWeight:'bold' , fontSize:18}}>ZF 1315202037</Animated.Text>
								<Animated.Text style={{color:'#fff',  fontSize:16, marginTop:20}}>{`Вал первичный\nс натяжителем чего-то там`}</Animated.Text>
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