import React from 'react';
import { Text, View,Platform,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Library from '../../Views/Library';
import Home from '../../Views/Home';
import Search from '../../Views/Search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import ArNavigator from './ArNavigator';
import HomeNavigation from './HomeNavigation';
import LibraryNavigation from './LibraryNavigation';
import SearchNavigation from './SearchNavigation';
import { colorScheme } from '../../Utils/constants';
import { navigationRef } from './RootNavigation';
import { BlurView } from '@react-native-community/blur';
import { defaultScheme } from '../../Utils/constants';
const Tabs = createBottomTabNavigator();
const styles = StyleSheet.create({
  shadow: {
      
      shadowColor: '#D8D8D8',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: {
          width: 0,            // Same rules apply from above
          height: 1,           // Can't both be 0
      },
},

}
);






const Main = () => {
  return (
    <Tabs.Navigator id="tabs" ref={navigationRef} initialRouteName='AR' screenOptions=
    {{headerShown: false,tabBarBackground: () => (
      <BlurView blurType='light' blurAmount={20} blurRadius={15} style={{width:'100%',padding:120,backgroundColor:'rgba(255, 255, 255, 0.8)',borderWidth:1,borderColor:'#ebebeb'}} />
    ),tabBarStyle:{position:'absolute'} }} >
      <Tabs.Screen name="AR" component = {ArNavigator} 

         options={{
          // tabBarBackground:()=>{
          //   <BlurView blurType='light' blurAmount={0} blurRadius={10} style={{width:'100%',padding:120}} />
          // }
       tabBarStyle:{position:'absolute',borderTopWidth:0},headerShown:false,tabBarIcon:({focused,size,color})=>(<MaterialCommunityIcons style={styles.shadow} name="cube-scan" size={26} color ={focused?'#3282B8':defaultScheme.defaultGray} />),
         tabBarLabel:({focused})=>(<Text style={{color:focused?'#3282B8':defaultScheme.defaultGray,fontSize:10,fontWeight:'600'}}>AR</Text>)
        }}
        />
      <Tabs.Screen name="Home" component = {HomeNavigation}  
       
        options={{tabBarStyle:{position:'absolute',borderTopWidth:0},headerShown:false,tabBarIcon:({focused,size,color})=>(<Feather name="compass" size={26} style={styles.shadow} color ={focused?'#3282B8':defaultScheme.defaultGray}  />),
        tabBarLabel:({focused})=>(<Text style={{color:focused?'#3282B8':defaultScheme.defaultGray,fontSize:10,fontWeight:'600'}}>Explore</Text>)}}/>

  
        <Tabs.Screen name="Library" component = {LibraryNavigation}  
        options={{tabBarStyle:{position:'absolute',borderTopWidth:0},headerShown:false,tabBarIcon:({focused,size,color})=>(<Ionicons name="library" size={26} style={styles.shadow} color ={focused?'#3282B8':defaultScheme.defaultGray}  />),
        tabBarLabel:({focused})=>(<Text style={{color:focused?'#3282B8':defaultScheme.defaultGray,fontSize:10,fontWeight:'600'}}>Library</Text>)}}/>
        
        <Tabs.Screen name="Search" component = {SearchNavigation} 
         options={{tabBarStyle:{position:'absolute',borderTopWidth:0},headerShown:false,tabBarIcon:({focused,size,color})=>(<Ionicons name="search" style={styles.shadow} size={26} color ={focused?'#3282B8':defaultScheme.defaultGray} />),
         tabBarLabel:({focused})=>(<Text  style={{color:focused?'#3282B8':defaultScheme.defaultGray,fontSize:10,fontWeight:'600'}}>Search</Text>)
        }}
        />
    </Tabs.Navigator>
  )
}

console.log(navigationRef.current,49)
export default Main