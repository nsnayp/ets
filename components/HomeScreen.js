import * as React from 'react';
import {
	Text,
	View,
	TouchableNativeFeedback,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

export class HomeScreen extends React.Component {


constructor(props) {
	super(props); 
	this.state = {
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
						images:[
							{	
								key:1,
								src:'http://etsgroup.ru/assets/product/1000/bosch/0451103033_1.jpg'
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

navigateToRelease=(release)=>{
	this.props.navigation.navigate({routeName:'Release', params:  {  release:release } })
}

renderRealese= release =>{
	return(
		<View key={release.key} style={{borderBottomColor:'#eee', borderBottomWidth:1}}>
			<TouchableNativeFeedback
			onPress={ ()=>{ this.navigateToRelease(release)} }>
				<View style={{padding:16}}>
					<Text>Реализация номер: {release.title}</Text>
					<Text>Дата документа: {release.date}</Text>
					<Text>Количество позиций: {release.details&& release.details.length}</Text>
				</View>
			</TouchableNativeFeedback>
		</View>
		
	)
}



render() {

	return (
		<View style={{flex:1, backgroundColor:'#fff'}}>
			<ScrollView>{Object.values(this.state.releases).map(item => this.renderRealese(item))}</ScrollView>
		</View>
	);
}
}
