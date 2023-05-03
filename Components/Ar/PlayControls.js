import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View,TouchableOpacity ,StatusBar,Alert} from "react-native";
import { BlurView } from '@react-native-community/blur';
import Hint from './Hint';



const PlayControls = ({goBack,isLocked,setIsLocked,isPortalMode,isPlayground,onZoomIn,onZoomOut,videoShowing,setVideoShowing,isPaused,setIsPaused}) => {

 const styles = StyleSheet.create({
    hintButtons:{
      
      marginVertical:5,
      borderRadius:50,
      display:'flex',
      marginLeft:10,
      // backgroundColor:'black',
      overflow:'hidden'
    },
    backBtnStyle:{
        // backgroundColor: 'white',
        // 
        borderRadius:50,
        display:'flex',
        marginLeft:10,
        // backgroundColor:'black',
        overflow:'hidden'
      },
      container: {
        // marginHorizontal: 10,
        // alignItems: "center"
      },
      topView: {
        // display: 'flex',
        // flexDirection: 'column',
        position: 'absolute',
        top:90,
        right: 10,
        padding:0,
        // paddingTop:40
      },
    //   topRight: {
    //     width: '100%',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     position: 'absolute',
    //     top: 0,
    //     right:30,
    //     padding:20,
    //     paddingTop:30
    //   },
 })
  return (
    <View style={styles.topView}>
    
    {/* <TouchableOpacity style={styles.backBtnStyle} 
    onPress={()=>{goBack()}}
    >
      <Ionicons 
      name="chevron-back-outline" 
      color="white" 
      size={30}
      />
    </TouchableOpacity> */}

    {(isPortalMode == false || isPlayground == true) && 
    <View style={{display:'flex',flexDirection:'column'}}>
    <TouchableOpacity
     onPress={()=>{
        setVideoShowing(!videoShowing)
     }}
     >
         <View style={styles.hintButtons}>  
       <BlurView style={{padding:8}} blurType={'dark'}>
           <MaterialCommunityIcons
            name={videoShowing?'audio-video-off':'audio-video'}
            color="white" 
            size={22}
            />
        </BlurView>
      </View>

     </TouchableOpacity>
      
       <TouchableOpacity
     onPress={()=>{
        setIsLocked(!isLocked);
     }}
     >
     <View style={styles.hintButtons}>  
       <BlurView style={{padding:8}} blurType={'dark'}>
        <Ionicons 
        name={isLocked?"lock-closed" : "lock-open"}
        color="white" 
        size={22}
        />
       </BlurView>
      
    </View>
     </TouchableOpacity> 

     <TouchableOpacity
     onPress={()=>{
        onZoomIn()
     }}
     >
     <View style={styles.hintButtons}>  
       <BlurView style={{padding:8}} blurType={'dark'}>
        <Ionicons 
        name={'add'}
        color="white" 
        size={22}
        />
       </BlurView>
      
    </View>
     </TouchableOpacity> 

     <TouchableOpacity
     onPress={()=>{
        onZoomOut()
     }}
     >
     <View style={styles.hintButtons}>  
       <BlurView style={{padding:8}} blurType={'dark'}>
        <Ionicons 
        name={'remove'}
        color="white" 
        size={22}
        />
       </BlurView>
      
    </View>
     </TouchableOpacity> 
     {
        videoShowing && 
        <TouchableOpacity
        onPress={()=>{
           setIsPaused(!isPaused)
        }}
        >
        <View style={styles.hintButtons}>  
          <BlurView style={{padding:8}} blurType={'dark'}>
              <MaterialCommunityIcons
               name={!isPaused?'pause':'play'}
               color="white" 
               size={22}
               />
           </BlurView>
         </View>
   
        </TouchableOpacity>


     }

    </View>
    
    }
  </View>
  )
}

export default PlayControls