import * as React from 'react';
import {
	View,
    TextInput,Text,
    TouchableNativeFeedback
} from 'react-native';

export class SearchScreen extends React.Component {

constructor(props) {
    super(props); 
    this.state = {
                data:[]
    }
}

search = (text) => {
    fetch('http://141.101.203.99:1315/call/testw?q='+text)
    .then((response) => response.json())
    .then((responseJson) => {
    
        this.setState({
                    data:responseJson  
        })
        console.log(responseJson.response)
    })
    .catch((error) => {
        console.error(error);
    });
}

renderItem = (item) =>{
    return(
    <View key={item.num} style={{borderBottomColor:'#eee', borderBottomWidth:1}}>
        <TouchableNativeFeedback>
            <View style={{padding:16}}>
                        <Text>{item.num}  {item.brand}</Text>
                        <Text>Остаток: {item.Остаток}</Text>
                        <Text>Ячейка: {item.Ячейка}</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
    )
}

render() {
	return (
		<View style={{flex:1, backgroundColor:'#fff'} }   >
            <TextInput onChangeText={this.search} style={{padding:10, fontSize:18}} placeholder="Введите номер запчасти"></TextInput>

            {Object.values(this.state.data).map(item => this.renderItem(item))}
		</View>
	);
}
}
