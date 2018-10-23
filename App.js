import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Vibration,
  TouchableOpacity,
  Image,
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { HomeScreen } from './components/HomeScreen';
import { AssetExample } from './components/AssetExample';

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      
    },
    Asset: {
      screen: AssetExample,
      navigationOptions: {
        title: 'Настройки',
      },
    },
  },{
    mode:'card ',
    headerMode:'float',
    headerTransitionPreset :"fade-in-place",
    
    
  }
);
const styles = StyleSheet.create({});
