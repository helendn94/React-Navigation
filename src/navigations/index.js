import HomeScreen from '@components/HomeScreen';
import ProfileScreen from '@components/ProfileScreen';
import LoginScreen from '@components/LoginScreen';
import AboutScreen from '@components/AboutScreen';
import SlideMenuScreen from '@components/SlideMenuScreen';
import { Button } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

// Stack navigation
const stack1 = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  ProfileScreen: { screen: ProfileScreen },
});

const stack2 = createStackNavigator({
  AboutScreen: { screen: AboutScreen }
});

// Tab Navigation
const Tabs = createBottomTabNavigator({
  Home: {
    screen: stack1,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  About: {
    screen: stack2,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  },
}, {
  swipeEnabled: true,
  tabBarOptions: {
    style: { backgroundColor: '#fff' },
    labelStyle: { fontSize: 18 },
    activeTintColor: '#e91e63',
  }
});

// Draw navigation
const DrawMenu = createDrawerNavigator({
  Tabbar: { screen: Tabs }
}, {
  contentComponent: props => <SlideMenuScreen {...props} />
});

const SwitchTab = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  Stack: { screen: DrawMenu }
});

export default SwitchTab;
