import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity,ImageBackground, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getTrackers } from '../../Utils/functions';
import { BlurView } from '@react-native-community/blur';
import { getPortalData } from '../../../Utils/functions';


const PortalCard = ({portalId,onclick,portalEntry}) => {

  const [portalData,setPortalData] = React.useState({});
  const styleSheet = StyleSheet.create({
    containerStyle:{
        width:'100%',
        padding:15,
        borderRadius:20,
        display:'flex',
        flexDirection:'column',
    },
    descriptionAreaStyle:{
        display:'flex',
        marginLeft:20,
        flexDirection:'column',
        width:200
    },
    lessonStyle:{
      fontSize:15,
      marginTop:5,
      marginBottom:5,
      fontWeight:'400',
      color:'white'
    },
    titleStyle: 
    {
        fontWeight:'500',
        fontSize:16,
        color:'white',
        width:200
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
    //   backgroundColor:'black',
      borderRadius:50
    },
    resetButtonStyle:{

    }
  });

  React.useEffect(()=>{
    if (portalEntry == 'ar')
    {   
        let portal = getPortalData((portalId + 1).toString())
        setPortalData(portal);
    }
    else
    {   
        let portal = getPortalData(portalId)
        setPortalData(portal);
    }
  
  },[portalId])



  return (
    <BlurView blurAmount={30} blurType={'dark'} style={styleSheet.containerStyle}>
      <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <View style={styleSheet.imageCardStyle}>
          <ImageBackground borderRadius={10} source={portalData?.backgroundUrl} style={{width:80,height:80,backgroundColor:'gray',borderRadius:10}}/>
          </View>
          <View style ={styleSheet.descriptionAreaStyle}>
              <View><Text style={styleSheet.titleStyle}>{portalData?.title}</Text></View>
              <View><Text style={styleSheet.lessonStyle}>{portalData?.location}</Text></View>
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
      </View>
      {/* <View style={{width:'100%'}}>
        <TouchableOpacity onPress = {()=>{onreset()}} style={styleSheet.resetButtonStyle}>
            <Text>
                Reset Portal
            </Text>
        </TouchableOpacity>
      </View> */}
    </BlurView>
  )
}

export default PortalCard;