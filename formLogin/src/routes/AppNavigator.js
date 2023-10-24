import { createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
  },
);

export default AppNavigator;
