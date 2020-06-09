import { createSwitchNavigator, 
    createAppContainer, 
    createBottomTabNavigator } from 'react-navigation';

import Index from './Index';
import Home from './Home';
import Settings from './Settings';
import InitGeder from './inits/InitGender'

const Routes = createAppContainer(
    createSwitchNavigator({
        InitGeder,
        Index,
        Home,
        Settings,
    })
);

export default Routes;