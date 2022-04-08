import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from '../pages/Chat/Chat';
import React from 'react';
import {Colors, Images} from '../themes';
import {hp} from '../themes/Metrix';
import MyDocs from '../pages/Docs/MyDocs';
import Profile from '../pages/Profile/Profile';
import PatientHistory from '../pages/Home/PatientHistory';
import {Routes} from '../utils/Routes';
import ImageIcon from '../components/ImageIcon';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Tabs.Home}
      screenOptions={{
        tabBarActiveTintColor: Colors.pink,
        headerShown: false,
      }}>
      <Tab.Screen
        name={Routes.Screens.PatientHistory}
        component={PatientHistory}
        options={{
          tabBarLabel: Routes.Tabs.Home,
          tabBarIcon: ({color, size, focused}) => (
            <ImageIcon
              source={focused ? Images.pHouse : Images.gHouse}
              height={hp(3)}
              width={hp(3)}
              enableRadius={false}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Tabs.MyDocs}
        component={MyDocs}
        options={{
          tabBarLabel: Routes.Tabs.MyDocs,
          tabBarIcon: ({color, size, focused}) => (
            <ImageIcon
              source={focused ? Images.pDoc : Images.gDoc}
              height={hp(3)}
              width={hp(3)}
              enableRadius={false}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Tabs.Messaging}
        component={Chat}
        options={{
          tabBarLabel: Routes.Tabs.Messaging,
          tabBarIcon: ({color, size, focused}) => (
            <ImageIcon
              source={focused ? Images.pMessage : Images.gMessage}
              height={hp(3)}
              width={hp(3)}
              enableRadius={false}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Tabs.Profile}
        component={Profile}
        options={{
          tabBarLabel: Routes.Tabs.MyDocs,
          tabBarIcon: ({color, size, focused}) => (
            <ImageIcon
              source={focused ? Images.pUser : Images.gUser}
              height={hp(3)}
              width={hp(3)}
              enableRadius={false}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
