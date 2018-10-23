Hoimport * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Vibration,
  TouchableOpacity,
  Image
} from 'react-native';
import { Constants } from 'expo';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
    };
  }

  btnPressed() {
    Vibration.vibrate();
    let newVal = this.state.val + 1;
    this.setState({
      val: newVal,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ justifyContent:'space-around',flexDirection:'row',  alignSelf:'stretch', backgroundColor:'#272f3e'}}>
          <TouchableOpacity
            style={{  padding: 15, width: '70%', }}
            onPress={this._onPressButton}>
            <Text style={{color:'#fff', fontSize:17}}>PASSAT EXT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{  padding: 15,width: '30%',alignSelf:'flex-end', }} 
            onPress={this._onPressButton}>
            <Image source={require('./assets/settings.png')} style={{width:25, height:25,alignSelf:'flex-end',marginLeft:10}} />

            
          </TouchableOpacity>
        </View>
        <Text style={styles.paragraph}>Привет, Василий</Text>

        <Button
          title="Копка счетчикsfsef"
          onPress={this.btnPressed.bind(this)}
        />
        <Text style={{ color: '#fff', fontSize: 12 }}>{this.state.val}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#212733',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
