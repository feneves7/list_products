import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import About from './pages/About'; 
import Home from './pages/Home';
import DetailProduct from './pages/DetailProduct';

import './config/StatusBarConfig';


const Routes = createAppContainer(
    createStackNavigator({
        Home,
        DetailProduct,
        About
    }, {
        defaultNavigationOptions: {
            headerStyle:{
                backgroundColor: "#460194",
                height: 100,
            },
            headerTintColor: "#FFF"
        },
    })
)

export default Routes;