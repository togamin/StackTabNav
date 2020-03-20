import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home2Screen } from './Home2Screen';
import { Detail2Screen } from './Detail2Screen';

const Home2Stack = createStackNavigator();

export function Home2StackScreen(){
   return (
    <Home2Stack.Navigator
      screenOptions={{
        headerTintColor:"#ffffff",
        headerStyle: {
          backgroundColor: "#333399",
        }
      }}
      headerMode="float"
    >
      <Home2Stack.Screen name = "Home2" component={Home2Screen}/>
      <Home2Stack.Screen name = "Detail2" component={Detail2Screen}/>
    </Home2Stack.Navigator>
   );
}