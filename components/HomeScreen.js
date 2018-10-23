import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Vibration,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Constants } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';

export class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Passat Go',
      headerRight: (
        <TouchableOpacity
          style={{ width: '100%', alignSelf: 'flex-end', padding: 15 }}
          onPress={() => navigation.navigate('Asset')}>
          <MaterialIcons name="settings" size={24} color="#44aacc" />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#eee',
      },
    };
  };

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
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignSelf: 'stretch',
            backgroundColor: '#fff',
          }}>
          <TouchableOpacity
            style={{ padding: 15, width: '70%' }}
            onPress={this._onPressButton}
          />

          <TouchableOpacity
            style={{ padding: 15, width: '30%', alignSelf: 'flex-end' }}
            onPress={() => this.props.navigation.navigate('Asset')}>
            <Image
              source={require('../assets/settings.png')}
              style={{
                width: 25,
                height: 25,
                alignSelf: 'flex-end',
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>
        </View>


        <Text style={styles.paragraph}>Привет, Василий 211</Text>

        <Button title="Копка счетчик" onPress={this.btnPressed.bind(this)} />
        <Text style={{ color: '#000', fontSize: 12 }}>{this.state.val}</Text>

        <View style={{backgroundColor:'#fafafa', width:'100%', justifyContent:'space-around'}}>
            <View>
              <MaterialIcons name="settings" size={24} color="#44aacc" />
            </View>
        </View>  

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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
