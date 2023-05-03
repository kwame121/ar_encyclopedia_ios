import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View,TouchableOpacity ,StatusBar,Alert} from "react-native";
import { BlurView } from '@react-native-community/blur';
import Hint from './Hint';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { defaultScheme } from '../../Utils/constants';



const TopNav = ({goBack,showList,isPortalMode,isPlayground,onclick,currentAxis,setCurrentAxis}) => {


 const [menuOpen,setMenuOpen] = React.useState(false);
 const styles = StyleSheet.create({
    hintButtons:{
      paddingTop:10
    },
    backBtnStyle:{
        // backgroundColor: 'white',
        // padding:10,
        borderRadius:50,
        display:'flex',
        marginLeft:10,
        // backgroundColor:'black',
        overflow:'hidden'
      },
      container: {
        marginHorizontal: 10,
        alignItems: "center"
      },
      topView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        position: 'absolute',
        top: 0,
        left: 0,
        padding:10,
        paddingTop:40
      },
      topRight: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        right:30,
        padding:20,
        paddingTop:30
      },
 })

 const closeMenu = () => {
  setMenuOpen(false);
 }

 const openMenu = () => {
  setMenuOpen(true);
 }
  return (
  
    <View style={styles.topView}>
    
    <TouchableOpacity 
    onPress={()=>{goBack()}}
    >
      <View style={styles.backBtnStyle}>
        <BlurView style={{padding:8}} blurType={'dark'}>
        <Ionicons 
        name="chevron-back-outline" 
        color="white" 
        size={22}
        />
        </BlurView>
      </View>
    </TouchableOpacity>

    {(isPortalMode == false || isPlayground == true) && 
    <View style={{display:'flex',flexDirection:'row'}}>
         <Menu opened={menuOpen} onBackdropPress={closeMenu} onSelect={value => setCurrentAxis(value)}>
              <MenuTrigger children = { <TouchableOpacity
                onPress={openMenu}
                >
              <View  style={styles.backBtnStyle}>
                <BlurView style={{padding:8}} blurType={'dark'}>
                  <MaterialCommunityIcons 
                  name="axis-arrow" 
                  color="white" 
                  size={22}
                  />
                </BlurView>
              </View>
            </TouchableOpacity> }/>
          <MenuOptions optionsContainerStyle={{backgroundColor:'black',alignItems:'center',marginTop:35,width:50,borderRadius:5}}>
            <MenuOption value={'X'} children = {<MaterialCommunityIcons 
                  name="axis-z-rotate-clockwise" 
                  color={currentAxis == 'X'?defaultScheme.defaultColor:'white'}
                  size={22}
                  />}
            />
            <MenuOption value={'Y'} children = {<MaterialCommunityIcons 
                  name="axis-y-rotate-clockwise" 
                  color={currentAxis == 'Y'?defaultScheme.defaultColor:'white'}
                  size={22}
                  />}
             />
                <MenuOption value={'Z'} children = {<MaterialCommunityIcons 
                  name="axis-x-rotate-clockwise" 
                  color={currentAxis == 'Z'?defaultScheme.defaultColor:'white'}
                  size={22}
                  />}
             />
          </MenuOptions>
          </Menu>

      <TouchableOpacity onPress={onclick}>
      <View  style={styles.backBtnStyle}>
        <BlurView style={{padding:8}} blurType={'dark'}>
           <Ionicons 
            name="help" 
            color="white" 
            size={22}
            />
         </BlurView>
         </View>

         

      </TouchableOpacity>

           
    </View>
    
    }
  </View>
  )
}

export default TopNav