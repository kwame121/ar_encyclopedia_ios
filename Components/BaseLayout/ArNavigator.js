import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArHome from '../../Views/ArHome';
import TrackingBookSelection from '../../Views/TrackingBookSelection';
import PortalSelection from '../../Views/PortalSelection';
import Tracking from '../../Views/Tracking';
import PortalCamera from '../../Views/PortalCamera';
import ModuleDetails from '../../Views/ModuleDetails';
import Playground from '../../Views/Playground';
import PlaygroundPicker from '../../Views/PlaygroundPicker';

const Stack = createNativeStackNavigator();

const ArNavigator = ({navigation}) => {
  return (
        <Stack.Navigator initialRouteName="ArHome">
            <Stack.Screen name = "ArHome" component={ArHome}  options={{title:'',headerShadowVisible: false,}} /> 
            <Stack.Screen name = "Tracking" component={TrackingBookSelection}  options={{title:'',headerShadowVisible: false,}} />  
            <Stack.Screen name = "Portal" component={PortalSelection}  options={{title:'',headerShadowVisible: false,}} /> 
            <Stack.Screen name = "TrackingCamera" component = {Tracking} options={{headerShown:false,title:'',headerShadowVisible: false,}} />
            <Stack.Screen name = "PortalCamera" component = {PortalCamera} options={{headerShown:false,title:'',headerShadowVisible: false,}} />
            <Stack.Screen name = "ModuleDetails" component = {ModuleDetails} options={{headerShown:true,title:'',headerShadowVisible: false,}} />
            <Stack.Screen name = "Playground" component={PlaygroundPicker}  options={{title:'',headerShadowVisible: false,}} />  
            <Stack.Screen name = "PlaygroundCamera" component = {Playground} options={{headerShown:false,title:'',headerShadowVisible: false,}} />

        </Stack.Navigator>

  )
}

export default ArNavigator