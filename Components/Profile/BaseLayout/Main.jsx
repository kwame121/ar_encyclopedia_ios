import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Library from '../../../Views/Library';
import Home from '../../../Views/Home';
import Search from '../../../Views/Search';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { colorScheme } from '../../../Utils/constants';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ArNavigator from './ArNavigator';
import HomeNavigation from './HomeNavigation';
import LibraryNavigation from './LibraryNavigation';
import SearchNavigation from './SearchNavigation';

const Tabs = createBottomTabNavigator();


const Main = () => {
  return (
    <Tabs.Navigator initialRouteName='Home' screenOptions={{ headerShown: false,tabBarStyle:{backgroundColor:'#f0f0f0',paddingTop:10} }} >

      <Tabs.Screen name="Home" component = {HomeNavigation}  
       
        options={{headerShown:false,tabBarIcon:({focused,size,color})=>(<Feather name="home" size={26} color ={focused?colorScheme.light2:'#bdbdbd'}  />),
        tabBarLabel:({focused})=>(<Text style={{color:focused?'black':'#bdbdbd',fontSize:12,fontWeight:'600'}}></Text>)}}/>

      <Tabs.Screen name="AR" component = {ArNavigator} 
         options={{tabBarIcon:({focused,size,color})=>(<MaterialCommunityIcons name="cube-scan" size={26} color ={focused?colorScheme.light2:'#bdbdbd'} />),
         tabBarLabel:({focused})=>(<Text  style={{color:focused?'black':'#bdbdbd',fontSize:12,fontWeight:'600'}}></Text>)
        }}
        />
        <Tabs.Screen name="Library" component = {LibraryNavigation}  
        options={{tabBarIcon:({focused,size,color})=>(<Ionicons name="library" size={26} color ={focused?colorScheme.light2:'#bdbdbd'}  />),
        tabBarLabel:({focused})=>(<Text style={{color:focused?'black':'#bdbdbd',fontSize:12,fontWeight:'600'}}></Text>)}}/>
        
        <Tabs.Screen name="Search" component = {SearchNavigation} 
         options={{headerShown:false,tabBarIcon:({focused,size,color})=>(<FontAwesome name="search" size={26} color ={focused?colorScheme.light2:'#bdbdbd'} />),
         tabBarLabel:({focused})=>(<Text  style={{color:focused?'black':'#bdbdbd',fontSize:12,fontWeight:'600'}}></Text>)
        }}
        />

        
        {/*   */}
        {/* <Tabs.Screen name = "AR" component = {Library}/> */}
    </Tabs.Navigator>
  )
}

export default Main