import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Library from './Views/Library';
import SplashScreen from './Views/SplashScreen';
import Details from './Views/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Components/BaseLayout/Main';
import { colorScheme } from './Utils/constants';
// import NewFile from './Views/NewFile';
import ModuleDetails from './Views/ModuleDetails';
import 'react-native-gesture-handler';
import { SheetProvider } from 'react-native-actions-sheet';
import '../starter-kit/Components/BaseLayout/sheets';
import { LogBox } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

// import { navigationRef } from './Components/BaseLayout/RootNavigation';



const Stack = createNativeStackNavigator()

export default function App() {
  return (
    < MenuProvider>
     <SheetProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={SplashScreen} options={{title:'',headerShadowVisible: false,headerStyle:{backgroundColor:'white'}}} />
        <Stack.Screen name="Main" component={Main} options ={{title:'',headerShadowVisible: false, 
        headerShown:false,
        headerBackTitleVisible: false, headerBackVisible:false, gestureEnabled:false, headerStyle:{backgroundColor:colorScheme.dark} }}   />
        </Stack.Navigator>
      </NavigationContainer>
    </SheetProvider> 
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
