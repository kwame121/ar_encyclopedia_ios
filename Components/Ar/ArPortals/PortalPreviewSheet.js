import React from 'react';
import { View,StyleSheet,Text,ScrollView,TouchableOpacity,ImageBackground, Alert } from 'react-native';
import ActionSheet, { SheetProps,  useScrollHandlers, } from "react-native-actions-sheet";
import { trackingAssets } from '../../Utils/trackingAssets';
import { BlurView } from '@react-native-community/blur';
import { portalAssets } from '../../../Utils/portalAssets';
import ReadMore from 'react-native-read-more-text';
import { defaultScheme } from '../../../Utils/constants';

const PortalPreviewSheet = (props) => {
  const portalRef = React.useRef(null);
  const [portalObj,setPortalObj] = React.useState({});
  const scrollHandlers = useScrollHandlers(
    'scrollview-1',
    portalRef,
  )
  const styles = StyleSheet.create({
    containerStyle:{
      // padding:30,
      width:'100%',
      backgroundColor:'transparent'
    },
    titleArea:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      marginBottom:10,
      justifyContent:'center'
    },
    titleTextArea:{
      display:'flex',
      flexDirection:'column',
      color:'white'
    },
    title:{
      fontWeight:'500',
      color:'white',
      fontSize:20,
      marginTop:8,
    //   width:300,
      textAlign:'center'
  },
  subTitle:{
      fontWeight:'300',
      color:'white',
      fontSize:16,
      marginTop:5,
      textAlign:'center'
  },
  imageArea: {
    width:300,
    height:300,
    borderRadius:10,
    marginRight:10,
    alignItems:'center',
    justifyContent:'center'
  },
  textArea:{
    marginTop:10
  },
  textAreaContent:{
    textAlign:'left',
    fontSize:15,
    lineHeight:22,
    color:'white',
    letterSpacing:0.8
  },
  viewLessonStyle: {
    backgroundColor:'#dbdbdb',
    borderRadius:15,
    padding:5,
    marginTop:5,
    width:120,
    alignItems:'center'
  },
  enterButtonStyle:{
    backgroundColor:defaultScheme.defaultColor,
    width:'100%',
    padding:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    borderRadius:10
  }
  });



  React.useEffect(()=>{
    let portal = portalAssets.filter((portalObj)=>{
      return portalObj.id == (props?.payload?.portalId)
    })[0]
    setPortalObj(portal);
  },[props?.payload?.portalId])
  return (
    <ActionSheet ref={portalRef} id={props.sheetId} containerStyle={styles.containerStyle}>
      <BlurView blurAmount={50} type={'dark'} style={{padding:30}}>
        <ScrollView {...scrollHandlers}>
        <View style={styles.titleArea}>
          <View style={styles.imageArea}>
          <ImageBackground borderRadius={10} source={portalObj?.backgroundUrl} style={{width:250,height:250,backgroundColor:'gray',borderRadius:10}}/>
          </View>
          <View style={styles.titleTextArea}>
            <Text style={styles.title}>{portalObj?.title}</Text>
            <Text style={styles.subTitle}>{portalObj?.location}</Text>
            {/* <TouchableOpacity style={styles.viewLessonStyle} onPress={()=>{props.payload.openLesson()}}>
              <View>
                <Text style={{fontSize:16,fontWeight:'600'}}>View Lesson</Text>
              </View>
            </TouchableOpacity> */}
          </View>
        </View>
        <View style={styles.textArea}>
        <ReadMore
              numberOfLines={3}

        >
          <Text style={styles.textAreaContent}>
            {portalObj?.description}
          </Text>
        </ReadMore>
        </View>
        <TouchableOpacity onPress={()=>{props?.payload?.onpress(props?.payload?.portalId)}}>
            <View style={styles.enterButtonStyle}> 
                <Text style={{color:'white',fontSize:18}}>Enter Portal</Text>
            </View>
        </TouchableOpacity>
        
      </ScrollView>

      </BlurView>
      
    </ActionSheet>
  )
}

export default PortalPreviewSheet;