/**
 * Application navigation stacks to be defined here.
 */
import {Navigation} from 'react-native-navigation';

import {SCREENS} from '../constants/screen';
import {THEME} from '../view/styles/theme';

export const STATUS_BAR_OPTIONS = {
  hideWithTopBar: true,
  backgroundColor: THEME.COLOR.StatusBar,
};

export const showSplash = () => {
  Navigation.setRoot({
    root: {
      component: {name: SCREENS.Splash},
    },
  });
};

export const tabbedNavigation = () =>
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: SCREENS.Drawer,
            id: 'drawerComponentId',
          },
        },
        center: {
          bottomTabs: {
            id: 'BottomTabsId',
            children: [
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: SCREENS.Home,
                        passProps: {
                          text: 'This is Home',
                        },
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true,
                    },
                    bottomTab: {
                      fontSize: 14,
                      text: 'Home',
                      textColor: THEME.COLOR.Primary,
                      selectedTextColor: THEME.COLOR.Warning,
                      selectedIconColor: THEME.COLOR.Warning,
                      icon: require('../view/assets/images/tabbar/home.png'),
                      selectedIcon: require('../view/assets/images/tabbar/home.png'),
                    },
                  },
                },
              },
              {
                stack: {
                  children: [
                    {
                      component: {
                        name: SCREENS.Settings,
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      visible: false,
                      drawBehind: true,
                      animate: true,
                    },
                    bottomTab: {
                      text: 'Settings',
                      fontSize: 14,
                      textColor: THEME.COLOR.Primary,
                      selectedTextColor: THEME.COLOR.Warning,
                      selectedIconColor: THEME.COLOR.Warning,
                      icon: require('../view/assets/images/tabbar/settings.png'),
                      selectedIcon: require('../view/assets/images/tabbar/settings.png'),
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  });

export default tabbedNavigation;
