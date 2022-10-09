import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArHome from '../../../Views/ArHome';
import Home from '../../../Views/Home';
import SubjectView from '../../../Views/SubjectView';
import Details from '../../../Views/Details';
import ModuleDetails from '../../../Views/ModuleDetails';


const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name = "Home" component={Home}  options={{title:'',headerShadowVisible: false,}} /> 
        <Stack.Screen name = "Subject" component={SubjectView}  options={{title:'',headerShadowVisible: false,}} /> 
        <Stack.Screen name = "Details" component={Details}  options={{title:'',headerShadowVisible: false,}} />   
        <Stack.Screen name = "Module" component={ModuleDetails}  options={{title:'',headerShadowVisible: false,}} />   
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeNavigation