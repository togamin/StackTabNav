import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackScreen } from './src/screen/HomeStackScreen';
import { Home2StackScreen } from './src/screen/Home2StackScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
 	      screenOptions={({ route }) => ({
 		      tabBarIcon: ({ focused, color, size }) => {
 			      let iconName;
 			      if (route.name === 'Home①') {
 				      iconName = focused
                ? 'ios-cube'
                : 'ios-cube';
 		  	    } else if (route.name === 'Home②') {
 				      iconName = focused
                ? 'ios-globe'
                : 'ios-globe';
 			      }
 			      return <Ionicons name={iconName} size={size} color={color} />;
           },
         }
        )}
        tabBarOptions={{
          activeTintColor: 'white',
            inactiveTintColor: '#333399',
            activeBackgroundColor:'#333399',
            inactiveBackgroundColor:'#9999dd',
        }}
      >
        <Tab.Screen name="Home①" component={HomeStackScreen} />
        <Tab.Screen name="Home②" component={Home2StackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

