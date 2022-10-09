import { StyleSheet, Text, View } from 'react-native';
// import { NativeRouter, Route, Link,Routes } from "react-router-native";
// import Library from './Views/Library';
import SplashScreen from './Views/SplashScreen';
// import Details from './Views/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Components/Profile/BaseLayout/Main';
import { colorScheme } from './Utils/constants';
// import ModuleDetails from './Views/ModuleDetails';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={SplashScreen} options={{title:'',headerStyle:{backgroundColor:'#1B262C'}}} />
      <Stack.Screen name="Main" component={Main} options ={{title:'',headerShadowVisible: false, 
      headerShown:false,
      headerBackTitleVisible: false, headerBackVisible:false, gestureEnabled:false, headerStyle:{backgroundColor:colorScheme.dark} }}   />
      {/* <Stack.Screen name="Details" component={Details} options ={{title:'',headerShadowVisible: false,
      headerBackTitleVisible: false,}} />
      <Stack.Screen name="Module" component={ModuleDetails} options ={{title:'Module Details',headerShadowVisible: true,
      headerBackTitleVisible: false,}} /> */}
    </Stack.Navigator>
  </NavigationContainer>
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
