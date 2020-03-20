import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './HomeScreen';
import { DetailScreen } from './DetailScreen';

const HomeStack = createStackNavigator();

export function HomeStackScreen(){
   return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor:"#ffffff",
        headerStyle: {
          backgroundColor: "#333399",
        }
      }}
      headerMode="float"
    >
      <HomeStack.Screen name = "Home" component={HomeScreen}/>
      <HomeStack.Screen name = "Detail" component={DetailScreen}/>
    </HomeStack.Navigator>
   );
}