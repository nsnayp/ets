import * as React from 'react';
import {
	Text,
	View,
	TouchableNativeFeedback,
	ActivityIndicator,
	PanResponder,
	Animated,
	Dimensions,
	Easing 
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

export class HomeScreen extends React.Component {


constructor(props) {
	super(props); 
	this.state = {
		pan: new Animated.ValueXY(),
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

getDirectionAndColor = ({ moveX, moveY, dx, dy}) => {
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
	onMoveShouldSetPanResponder:(evt, gestureState) => !!this.getDirectionAndColor(gestureState),
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
renderRealese= release =>{
	return(
		
		<View key={release.key} style={{borderBottomColor:'#eee', borderBottomWidth:1}}>
			
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

	return (
		<View style={{flex:1, backgroundColor:'#fff'}}>

			{/* <Animated.View style={{transform: [{translateY: this.translateY}] }} {...this._panResponder.panHandlers}>
				<View>
					
					{Object.values(this.state.releases).map(item => this.renderRealese(item))}
				</View>
			</Animated.View> */}
			<Animated.ScrollView
				/*scrollEventThrottle={16}
				onScroll={Animated.event(
				[
					{
					nativeEvent: { contentOffset: { y: this.state.scrollY } }
					}
				],
				{
					useNativeDriver: false  // <- Native Driver used for animated events
				}
				)}*/
				{...this._panResponder.panHandlers}
				
			>
				<View>
					{/* Scrollview */}
					{Object.values(this.state.releases).map(item => this.renderRealese(item))}
				</View>
			</Animated.ScrollView>
		</View>
	);
}
}
