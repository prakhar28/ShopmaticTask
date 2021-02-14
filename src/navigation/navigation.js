import React from 'react'
import Home from '../screens/Home/Home.screen'
import Search from '../screens/Search/Search.screen'
import SongDetail from '../screens/SongScreen/SongDetail'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import ScreenNames from '../constants/screens'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ScreenNames.homeScreen}
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'ios-home'} size={25} color={color} />
          }
        }}
      />
      <Tab.Screen
        name={ScreenNames.searchScreen}
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Icon name={'search'} size={25} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={ScreenNames.homeScreen} component={MyTabs} />
        <Stack.Screen name={ScreenNames.songDetail} component={SongDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
