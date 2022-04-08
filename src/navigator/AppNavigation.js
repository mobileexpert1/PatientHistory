import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../pages/Splash/Splash';
import MyTabs from './BottomTabNavigator';
import { Routes } from '../utils/Routes';
const Stack = createStackNavigator()

export default function AppNavigation() {
	return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Routes.Screens.Splash} options={{headerShown: false}} component={Splash} />
          <Stack.Screen name={Routes.Screens.Root} options={{headerShown: false}} component={MyTabs} />
        </Stack.Navigator>
      </NavigationContainer>
	)
}
