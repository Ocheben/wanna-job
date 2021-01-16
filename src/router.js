import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Applications from './screens/Applications/Applications';
import Home from './screens/Home/Home';
import Responses from './screens/Responses/Responses';
import Restaurants from './screens/Restaurants/Restaurants';

export const createRootNavigator = () =>
  createAppContainer(
    createStackNavigator(
      {
        Home: {
          screen: Home,
          navigationOptions: {
            headerShown: false,
          },
        },
        Restaurants: {
          screen: Restaurants,
        },
        Applications: {
          screen: Applications,
        },
        Responses: {
          screen: Responses,
        },
      },
      {
        initialRouteName: 'Home',
      },
    ),
  );
