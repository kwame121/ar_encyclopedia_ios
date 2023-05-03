import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArHome from '../../Views/ArHome';
import Home from '../../Views/Home';
import SubjectView from '../../Views/SubjectView';
import Details from '../../Views/Details';
import ModuleDetails from '../../Views/ModuleDetails';
import Tracking from '../../Views/Tracking';
import { BlurView } from '@react-native-community/blur';
import PortalCamera from '../../Views/PortalCamera';
import Playground from '../../Views/Playground';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (

    <Stack.Navigator  initialRouteName="Home">
        <Stack.Screen  name = "Home" component={Home}  options={{title:'Explore',headerShadowVisible: false,
        headerStyle:{backgroundColor:'white',position:'absolute',borderTopWidth:0} 
      }} /> 
        <Stack.Screen name = "Subject" component={SubjectView}  options={{title:'',headerShadowVisible:false,}} /> 
        <Stack.Screen name = "Details" component={Details}  options={{title:'',headerShadowVisible: false,}} />   
        <Stack.Screen name = "ModuleDetails" component={ModuleDetails}  options={{title:'',headerShadowVisible: false,}} />   
        <Stack.Screen name = "TrackingCamera" component = {Tracking} options={{headerShown:false,title:'',headerShadowVisible: false,}} />
        <Stack.Screen name = "PortalCamera" component = {PortalCamera} options={{headerShown:false,title:'',headerShadowVisible: false,}} />
        <Stack.Screen name = "PlaygroundCamera" component = {Playground} options={{headerShown:false,title:'',headerShadowVisible: false,}} />
    </Stack.Navigator>

  )
}

export default HomeNavigation