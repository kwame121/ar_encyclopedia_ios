import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Library from '../../Views/Library';
import Details from '../../Views/Details';
import ModuleDetails from '../../Views/ModuleDetails';
import Tracking from '../../Views/Tracking';
import Playground from '../../Views/Playground';

const Stack = createNativeStackNavigator();

const LibraryNavigation = () => {
  return (
        <Stack.Navigator initialRouteName="Library">
            <Stack.Screen name = "Library" component={Library}  options={{title:'',headerShadowVisible: false,}} /> 
            <Stack.Screen name = "Details" component={Details}  options={{title:'',headerShadowVisible: false,}} />  
            <Stack.Screen name = "ModuleDetails" component={ModuleDetails}  options={{title:'',headerShadowVisible: false,}} /> 
            <Stack.Screen name = "TrackingCamera" component = {Tracking} options={{headerShown:false,title:'',headerShadowVisible: false,}} />
            <Stack.Screen name = "PlaygroundCamera" component = {Playground} options={{headerShown:false,title:'',headerShadowVisible: false,}} />
        </Stack.Navigator>
  )
}

export default LibraryNavigation