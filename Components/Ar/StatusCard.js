import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity,ImageBackground} from 'react-native';
import SliderComponent from '../Reusable/Slider/SliderComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getTrackers } from '../../Utils/functions';
import { BlurView } from '@react-native-community/blur';
import AxisControls from './AxisControls';


const StatusCard = ({onclick,setRotation,rotation,trackerId,currentAxis,setCurrentAxis}) => {

  const [trackerData,setTrackerData] = React.useState({});
  const styleSheet = StyleSheet.create({
    containerStyle:{
        padding:15,
        borderRadius:20,
        display:'flex',
        flexDirection:'column',
        width:'100%'
    },
    descriptionAreaStyle:{
        display:'flex',
        marginLeft:20,
        flexDirection:'column',
        maxWidth:150
    },
    lessonStyle:{
      fontSize:14,
      marginTop:5,
      marginBottom:5,
      fontWeight:'400',
      color:'white'
    },
    titleStyle: 
    {
        fontWeight:'500',
        fontSize:18,
        color:'white'
    },
    imageCardStyle:{
        borderRadius:10,
        padding:2,
    },
    buttonStyle: {

      padding:10,
      backgroundColor:'black',
      borderRadius:10,
    },

    expandViewStyle:{
      marginLeft:'auto',
      padding:10,
      // backgroundColor:'black',
      borderRadius:10
    }
  });

  React.useEffect(()=>{
    let tracker = getTrackers(trackerId)[0];
    setTrackerData(tracker);
  },[trackerId])



  return (
    <BlurView blurAmount={30} blurType={'dark'} style={styleSheet.containerStyle}>
      {/* <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <View style={styleSheet.imageCardStyle}>
          <ImageBackground borderRadius={10} source={trackerData?.thumbnail} style={{width:80,height:80,backgroundColor:'gray',borderRadius:10}}/>
          </View>
          <View style ={styleSheet.descriptionAreaStyle}>
              <View><Text style={styleSheet.titleStyle}>{trackerData?.title}</Text></View>
              <View><Text style={styleSheet.lessonStyle}>{trackerData?.bookTitle}</Text></View>
          </View>
          <TouchableOpacity onPress={()=>{onclick()}} style={styleSheet.expandViewStyle}>
            <View>
            <Ionicons 
                name="chevron-up" 
                color="white" 
                size={30}
                />
            </View>  
          </TouchableOpacity> 
      </View> */}
      <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
        <SliderComponent setValue={setRotation}/>
        <View style={{alignItems:'center'}}><Text style={{fontSize:14,fontWeight:'400',color:'white'}}>*Use slider to rotate object</Text></View>
      </View>
      {/* <View style={{width:'100%',alignItems:'center'}}>
        <AxisControls onclick={setCurrentAxis} selected={currentAxis}/>
      </View> */}
    </BlurView>
  )
}

export default StatusCard