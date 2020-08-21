import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial92855Navigator from '../features/Tutorial92855/navigator';
import Messaging92854Navigator from '../features/Messaging92854/navigator';
import ArticleList92853Navigator from '../features/ArticleList92853/navigator';
import Achievements92852Navigator from '../features/Achievements92852/navigator';
import Add-Item92849Navigator from '../features/Add-Item92849/navigator';
import BlankScreen92843Navigator from '../features/BlankScreen92843/navigator';
import Contacts92826Navigator from '../features/Contacts92826/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial92855: { screen: Tutorial92855Navigator },
Messaging92854: { screen: Messaging92854Navigator },
ArticleList92853: { screen: ArticleList92853Navigator },
Achievements92852: { screen: Achievements92852Navigator },
Add-Item92849: { screen: Add-Item92849Navigator },
BlankScreen92843: { screen: BlankScreen92843Navigator },
Contacts92826: { screen: Contacts92826Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
