import * as React from 'react';
import { Button, View, Text, AppRegistry } from 'react-native';
import Home from './src/screens/home';
import List from './src/screens/list';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator ();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Booking') {
              iconName = focused ? 'ios-list' : 'ios-list';
            } else if (route.name === 'Notification') {
              iconName = focused ? 'ios-notifications' : 'ios-notifications';
            } else if (route.name === 'Account') {
              iconName = focused ? 'ios-person' : 'ios-person';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            return ekky_trial ;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Booking" component={List} />
        <Tab.Screen name="Notification" component={Home} />
        <Tab.Screen name="Account" component={List} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
