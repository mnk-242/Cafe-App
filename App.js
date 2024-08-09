import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Account from './components/Account';
import Menu from './components/Menu';
import Order from './components/Order';
import Favorite from './components/Favorite';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (    
    <Tab.Navigator
      initialRouteName="Menu"
      screenOptions={{tabBarActiveTintColor: '#a3705a'}}>

      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size+5} />
          ),
        }}
      />
    
      <Tab.Screen
        name="Order"
        component={Order}
        initialParams={[]}
        options={{
          headerShown: false,
          tabBarLabel: 'Order',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt" color={color} size={size} />
          ),
        }}/>

        <Tab.Screen
        name="Favorite"
        component={Favorite}
        initialParams={[]}
        options={{
          headerShown: false,
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}/>
      
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          }}/>
      </Tab.Navigator>
  );}

export default function App() {
  return (
  <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}