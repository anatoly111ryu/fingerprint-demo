import React from 'react';
import { Platform, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import colors from '../constants/Colors';

export default TabNavigator(
  {
    Home: {
      screen: () =>
        <View>
          <Text>Home</Text>
        </View>
    },
    Revenue: {
      screen: () =>
        <View>
          <Text>Revenue</Text>
        </View>
    },
    Devices: {
      screen: () =>
        <View>
          <Text>Devices</Text>
        </View>
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Revenue':
            iconName =
              Platform.OS === 'ios'
                ? `ios-cash${focused ? '' : '-outline'}`
                : 'md-cash';
            break;
          case 'Devices':
            iconName =
              Platform.OS === 'ios'
                ? `ios-warning${focused ? '' : '-outline'}`
                : 'md-warning';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? colors.tabIconSelected : colors.tabIconDefault}
          />
        );
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: colors.tabIconSelected
    }
  }
);
