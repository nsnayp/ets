import * as React from 'react';
import { createStackNavigator } from 'react-navigation';
import {HomeScreen} from 'components/HomeScreen';

const Nav = createStackNavigator({
  Home: { screen: HomeScreen },
});

export default Nav