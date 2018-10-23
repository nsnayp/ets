import * as React from 'react';
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
import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from 'components/HomeScreen';


const Nav = createStackNavigator({
  Home: { screen: HomeScreen },
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
    };
  }


  render() {
    return (
      <Nav/>
    );
  }
}

const styles = StyleSheet.create({


});
