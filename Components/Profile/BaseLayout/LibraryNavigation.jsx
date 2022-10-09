import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Library from '../../../Views/Library';
import Details from '../../../Views/Details';
import ModuleDetails from '../../../Views/ModuleDetails';

const Stack = createNativeStackNavigator();

const LibraryNavigation = () => {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="Library">
            <Stack.Screen name = "Library" component={Library}  options={{title:'',headerShadowVisible: false,}} /> 
            <Stack.Screen name = "Details" component={Details}  options={{title:'',headerShadowVisible: false,}} />  
            <Stack.Screen name = "Module" component={ModuleDetails}  options={{title:'',headerShadowVisible: false,}} /> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LibraryNavigation