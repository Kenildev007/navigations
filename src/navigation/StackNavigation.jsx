import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="DrawerNavigation" component={DrawerNavigation}  options={{headerShown:false}}/>
            <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}

const DrawerNavigation = () => {
    return (
        
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>
        
    )
};

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;

const styles = StyleSheet.create({})