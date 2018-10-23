import {
  createStackNavigator,
} from 'react-navigation';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default App;